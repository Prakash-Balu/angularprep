import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.Emulated   // default — Angular adds scoped attributes
})
export class HeaderComponent {}

