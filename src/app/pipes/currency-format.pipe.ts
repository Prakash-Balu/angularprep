import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  pure: true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(amount: number, currency: string = 'USD', locale: string = 'en-US'): string {
    if (amount == null) return '';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
}
