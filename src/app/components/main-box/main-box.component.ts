import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-box',
  imports: [BoxComponent, CommonModule],
  templateUrl: './main-box.component.html',
  styleUrl: './main-box.component.scss'
})
export class MainBoxComponent {
  // Demonstrates three independent component instances
  boxes = ['Box A', 'Box B', 'Box C'];
}
