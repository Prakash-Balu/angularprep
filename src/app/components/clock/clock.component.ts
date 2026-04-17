import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LiveTimePipe } from '../../pipes/live-time.pipe';

@Component({
  selector: 'app-clock',
  imports: [CommonModule, LiveTimePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit, OnDestroy {
  tick = 0;   // triggers change detection every second
  private timer: any;

  timezones = [
    { label: 'Local(India)',         zone: 'local'                },
    { label: 'New York',      zone: 'America/New_York'     },
    { label: 'London',        zone: 'Europe/London'        },
    { label: 'Mumbai',        zone: 'Asia/Kolkata'         },
    { label: 'Tokyo',         zone: 'Asia/Tokyo'           },
    { label: 'Australia',         zone: 'Australia/Sydney'           },
  ];

  ngOnInit() {
    // Increment tick every second to trigger change detection
    this.timer = setInterval(() => this.tick++, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
