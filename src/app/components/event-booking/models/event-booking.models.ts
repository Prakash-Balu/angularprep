export interface EventModel {
  id: number;
  title: string;
  date: string;
  venue: string;
  totalSeats: number;
  price: number;
}

export interface Seat {
  id: string;
  label: string;
  row: string;
  number: number;
  status: 'available' | 'booked' | 'locked';
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
}

export interface BookingConfirmation {
  event: EventModel;
  seats: Seat[];
  attendee: BookingForm;
  totalAmount: number;
  bookingId: string;
}

// Shared mock events used across components
export const MOCK_EVENTS: EventModel[] = [
  { id: 1, title: 'Rock Concert 🎸',  date: '2026-05-10', venue: 'Madison Square Garden', totalSeats: 40, price: 120 },
  { id: 2, title: 'Jazz Night 🎷',    date: '2026-05-15', venue: 'Blue Note Club',         totalSeats: 20, price: 80  },
  { id: 3, title: 'Comedy Show 😂',   date: '2026-05-20', venue: 'Laugh Factory',           totalSeats: 30, price: 60  },
  { id: 4, title: 'Tech Summit 💻',   date: '2026-06-01', venue: 'Convention Center',       totalSeats: 50, price: 250 },
];
