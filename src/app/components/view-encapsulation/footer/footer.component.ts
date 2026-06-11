import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None   // styles become global — they leak out!
})
export class FooterComponent {}
