import { Component, computed, effect, inject, OnDestroy, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-dashboard',
  imports: [CommonModule],
  templateUrl: './live-dashboard.component.html',
  styleUrl: './live-dashboard.component.scss'
})
export class LiveDashboardComponent implements OnDestroy {

    private api = inject(ApiService);

  // Control signal — toggling this triggers effect
  isPolling   = signal(false);
  pollCount   = signal(0);
  interval    = signal(5);    // seconds between API calls

  // Data signals
  posts       = signal<any[]>([]);
  lastUpdated = signal<Date | null>(null);
  loading     = signal(false);

  // computed — stats from fetched data
  totalPosts  = computed(() => this.posts().length);
  avgTitleLen = computed(() =>
    this.posts().length
      ? Math.round(this.posts().reduce((s, p) => s + p.title.length, 0) / this.posts().length)
      : 0
  );

  private pollTimer: any = null;

  constructor() {

    // effect() watches isPolling signal
    // starts/stops polling based on signal value
    effect(() => {
      const polling = this.isPolling();

      if (polling) {
        this.startPolling();
      } else {
        this.stopPolling();
      }
    });
  }

  // ✅ method called from template
  togglePolling() {
    this.isPolling.update(v => !v);
  }

  startPolling() {
    this.fetchData();
    this.pollTimer = setInterval(() => {
      this.fetchData();
    }, this.interval() * 1000);
  }

  stopPolling() {
    clearInterval(this.pollTimer);
  }

  fetchData() {
    this.loading.set(true);
    this.pollCount.update(n => n + 1);

    this.api.getPosts(1).subscribe(data => {
      this.posts.set(data);
      this.lastUpdated.set(new Date());
      this.loading.set(false);
    });
  }

  ngOnDestroy() {
    this.stopPolling();
  }
}
