import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeatSelectorComponent } from '../seat-selector/seat-selector.component';
import {
  EventModel, Seat, BookingConfirmation, MOCK_EVENTS
} from '../models/event-booking.models';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SeatSelectorComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent implements OnInit {

  // ── State ──────────────────────────────────────────────────────────
  event: EventModel | null = null;
  seats: Seat[] = [];
  maxSelectable = 4;

  confirmedSeats: Seat[] = [];
  liveSelectionCount = 0;       // updated by @Output selectionChanged
  step: 'seats' | 'details' | 'confirmed' = 'seats';
  confirmation: BookingConfirmation | null = null;

  // ── Reactive Form ─────────────────────────────────────────────────
  attendeeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.attendeeForm = this.fb.group({
      name:  ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = MOCK_EVENTS.find(e => e.id === id) ?? null;
    if (this.event) {
      this.seats = this.generateSeats(this.event.totalSeats);
    }
  }

  // ── Seat generation ───────────────────────────────────────────────
  private generateSeats(total: number): Seat[] {
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const perRow = 10;
    const seats: Seat[] = [];
    let count = 0;

    for (const row of rows) {
      for (let n = 1; n <= perRow; n++) {
        if (count >= total) break;
        seats.push({
          id: `${row}${n}`,
          label: `${row}${n}`,
          row,
          number: n,
          // ~20% pre-booked for realism
          status: (row === 'A' && n <= 2) || (row === 'B' && n === 5) ? 'booked' : 'available'
        });
        count++;
      }
    }
    return seats;
  }

  // ── @Output handlers (from SeatSelectorComponent) ─────────────────

  /** Fired on every seat toggle — keeps live count in sync */
  onSelectionChanged(count: number): void {
    this.liveSelectionCount = count;
  }

  /** Fired when user clicks "Confirm N Seat(s)" in child */
  onSeatsConfirmed(seats: Seat[]): void {
    this.confirmedSeats = seats;
    this.step = 'details';       // advance to attendee form step
  }

  // ── Form submission ───────────────────────────────────────────────
  submitBooking(): void {
    if (this.attendeeForm.invalid || !this.event) return;

    this.confirmation = {
      event: this.event,
      seats: this.confirmedSeats,
      attendee: this.attendeeForm.value,
      totalAmount: this.confirmedSeats.length * this.event.price,
      bookingId: 'BK-' + Math.random().toString(36).substring(2, 8).toUpperCase()
    };

    // Mark booked seats as unavailable in the grid
    this.confirmedSeats.forEach(cs => {
      const seat = this.seats.find(s => s.id === cs.id);
      if (seat) seat.status = 'booked';
    });

    this.step = 'confirmed';
  }

  // ── Navigation helpers ────────────────────────────────────────────
  goBack(): void {
    this.router.navigate(['/event-booking']);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  bookAnother(): void {
    this.step = 'seats';
    this.confirmedSeats = [];
    this.liveSelectionCount = 0;
    this.attendeeForm.reset();
    this.confirmation = null;
    this.seats = this.generateSeats(this.event!.totalSeats);
  }

  // ── Form field getters for clean template access ──────────────────
  get nameCtrl()  { return this.attendeeForm.get('name')!;  }
  get emailCtrl() { return this.attendeeForm.get('email')!; }
  get phoneCtrl() { return this.attendeeForm.get('phone')!; }
}
