import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveTime',
  pure: false
})
export class LiveTimePipe implements PipeTransform {

  transform(timezone: string = 'local'): string {
    const now = new Date();

    if (timezone === 'local') {
      return now.toLocaleTimeString();
    }

    return now.toLocaleTimeString('en-US', { timeZone: timezone });
  }

}
