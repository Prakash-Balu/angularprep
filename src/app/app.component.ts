import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularprep';

  count = signal(0);

  constructor() {
    this.count.set(5);
  }

  increment() {
    this.count.update(value => value + 1); // update the value - operation to compute a new value from the previous one
    // this.count.set(this.count() + 1); // set the value - To change the value of a writable signal
  }

  decrement() {
    this.count.update(value => value -1);
  }
}
