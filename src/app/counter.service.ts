import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class CounterService {

  count = 0;
  label = '';

  setLabel(name: string) {
    this.label = name;
  }

  increment() {
    this.count++;
  }

  decrement() {
    if(this.count > 0) this.count--;
  }

  reset() {
    this.count = 0;
  }
}
