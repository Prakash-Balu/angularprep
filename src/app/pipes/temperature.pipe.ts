import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  pure: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, from: 'C' | 'F' | 'K' = 'C', to: 'C' | 'F' | 'K' = 'F'): string {
    let result: number;

    // Convert to Celsius first
    let celsius: number;
    if (from === 'F') celsius = (value - 32) * 5 / 9;
    else if (from === 'K') celsius = value - 273.15;
    else celsius = value;

    // Convert Celsius to target
    if (to === 'F') result = (celsius * 9 / 5) + 32;
    else if (to === 'K') result = celsius + 273.15;
    else result = celsius;

    return `${result.toFixed(1)}° ${to}`;
  }

}
