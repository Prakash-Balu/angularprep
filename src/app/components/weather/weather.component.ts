import { Component } from '@angular/core';
import { TemperaturePipe } from '../../pipes/temperature.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [TemperaturePipe, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  cities = [
    { name: 'Chennai',   tempC: 38 },
    { name: 'London',    tempC: 15 },
    { name: 'New York',  tempC: 22 },
    { name: 'Moscow',    tempC: -5 },
  ];

  selectedCity = this.cities[0];

  select(city: any) {
    this.selectedCity = city;
  }
}
