import { Component  } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  imports: [],
  templateUrl: './grandchild.component.html',
  styleUrl: './grandchild.component.scss'
})
export class GrandchildComponent {
  message = '';

  receive(value: string) {
    this.message = value;
  }
}
