import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // /event-booking → Event list page
    path: '',
    loadComponent: () =>
      import('./event-booking.component').then(m => m.EventBookingComponent)
  },
  {
    // /event-booking/book/:id → Booking page (seat selector + form)
    path: 'book/:id',
    loadComponent: () =>
      import('./booking-page/booking-page.component').then(m => m.BookingPageComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventBookingRoutingModule { }
