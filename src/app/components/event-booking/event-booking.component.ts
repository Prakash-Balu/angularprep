import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EventModel, MOCK_EVENTS } from './models/event-booking.models';

@Component({
  selector: 'app-event-booking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-booking.component.html',
  styleUrl: './event-booking.component.scss'
})
export class EventBookingComponent {

  events: EventModel[] = MOCK_EVENTS;

  constructor(private router: Router) {}

  selectEvent(event: EventModel): void {
    this.router.navigate(['/event-booking/book', event.id]);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
