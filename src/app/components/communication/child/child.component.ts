import { Component, ViewChild, Input } from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';

@Component({
  selector: 'app-child',
  imports: [GrandchildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @ViewChild(GrandchildComponent) grandchild!: GrandchildComponent;
}


@Component({
  selector: 'app-ticket-card',
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <p>Price: {{ price }}</p>
      <p>Seats: {{ availableSeats }}</p>
    </div>
  `
})
export class TicketCardComponent {
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() availableSeats: number = 0;
}