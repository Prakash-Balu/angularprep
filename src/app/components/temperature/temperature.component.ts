import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  imports: [CommonModule, FormsModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent {

  // Single source of truth
  celsius = signal(0);

  // computed() -  auto-derives from celsius signal
  fahrenheit = computed(() => (this.celsius() * 9/5) + 32);
  kelvin = computed(() => this.celsius() + 273.15);

  status = computed(() => {
    const c = this.celsius();
    if(c <= 10) return { label: 'Freezing', color: 'primary' };
    if(c <= 15) return { label: 'Cold', color: 'info' };
    if(c <= 25) return { label: 'Warm', color: 'warning' };
    if(c <= 35) return { label: 'Hot', color: 'danger' };
    return  { label: 'Very Hot', color: 'dark' };
  });

  updateCelsius(val: number) { this.celsius.set(val); }
}
