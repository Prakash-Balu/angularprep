import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  imports: [CommonModule],
  providers: [CounterService],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent implements OnInit {
  @Input() boxName: string = '';

  constructor(public counter: CounterService) {}

  ngOnInit() {
    this.counter.setLabel(this.boxName);
  }

}
