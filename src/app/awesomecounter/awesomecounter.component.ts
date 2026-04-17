import { Component, inject, Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterState {
  //private writable state
  private readonly _count = signal(0);

  private readonly _derivedCount = signal(0);

  readonly count = this._count.asReadonly(); // public readonly

  readonly derivedCount = this._derivedCount.asReadonly(); // public readonly

  increment() {
    this._count.update(v => v + 1);
  }

  derivedIncrement() {
    this._derivedCount.update(v => v + 1);
  }
}


@Component({
  selector: 'app-awesomecounter',
  imports: [],
  templateUrl: './awesomecounter.component.html',
  styleUrl: './awesomecounter.component.scss'
})
export class AwesomecounterComponent {

  state = inject(CounterState);

  derivedState = inject(CounterState);

  count = this.state.count; // can read but not modify

  derivedCount = this.derivedState.derivedCount; // can read but not modify - only derived value

  derivedCounter = computed(() => { return this.derivedCount() * 10});

  increment() {
    this.state.increment();
  }

  incrementDerived() {
    this.derivedState.derivedIncrement();
  }
}
