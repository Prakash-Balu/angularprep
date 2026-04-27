import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Seat } from '../models/event-booking.models';

@Component({
  selector: 'app-seat-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-selector.component.html',
  styleUrl: './seat-selector.component.scss'
})
export class SeatSelectorComponent implements OnChanges {

  // ⬇️ @Input — data flowing IN from BookingPageComponent (parent)
  @Input() seats: Seat[] = [];
  @Input() maxSelectable: number = 4;
  @Input() pricePerSeat: number = 0;

  // ⬆️ @Output — events flowing OUT to BookingPageComponent (parent)
  @Output() seatsConfirmed = new EventEmitter<Seat[]>();
  @Output() selectionChanged = new EventEmitter<number>(); // emits count on every change

  selectedSeats: Seat[] = [];

  // Group seats by row for grid display
  get seatRows(): { row: string; seats: Seat[] }[] {
    const rowMap = new Map<string, Seat[]>();
    this.seats.forEach(seat => {
      if (!rowMap.has(seat.row)) rowMap.set(seat.row, []);
      rowMap.get(seat.row)!.push(seat);
    });
    return Array.from(rowMap.entries()).map(([row, seats]) => ({ row, seats }));
  }

  get totalPrice(): number {
    return this.selectedSeats.length * this.pricePerSeat;
  }

  ngOnChanges(): void {
    // Reset selection when seats input changes
    this.selectedSeats = [];
  }

  isSelected(seat: Seat): boolean {
    return this.selectedSeats.some(s => s.id === seat.id);
  }

  toggleSeat(seat: Seat): void {
    if (seat.status === 'booked') return;

    const idx = this.selectedSeats.findIndex(s => s.id === seat.id);

    if (idx > -1) {
      // Deselect
      this.selectedSeats = this.selectedSeats.filter(s => s.id !== seat.id);
    } else if (this.selectedSeats.length < this.maxSelectable) {
      // Select
      this.selectedSeats = [...this.selectedSeats, seat];
    }

    // ⬆️ Emit count to parent on every toggle
    this.selectionChanged.emit(this.selectedSeats.length);
  }

  confirmSelection(): void {
    if (this.selectedSeats.length === 0) return;
    // ⬆️ Emit confirmed seats array to parent
    this.seatsConfirmed.emit([...this.selectedSeats]);
  }

  clearSelection(): void {
    this.selectedSeats = [];
    this.selectionChanged.emit(0);
  }

  getSeatClass(seat: Seat): string {
    if (seat.status === 'booked')      return 'seat booked';
    if (this.isSelected(seat))         return 'seat selected';
    return 'seat available';
  }
}