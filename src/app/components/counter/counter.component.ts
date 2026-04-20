import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  count = signal(0);
  step = signal(1);

  increment() {
    this.count.update(v => v + this.step());
  }
  
  decrement() {
    this.count.update(b => b - this.step());
  }

  reset() {
    this.count.set(0);
  }

  setStep(val: number) {
    this.step.set(val);
  }
}
