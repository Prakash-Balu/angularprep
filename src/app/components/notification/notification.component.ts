import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'danger' | 'warning' | 'inf0';
}

@Component({
  selector: 'app-notification',
  imports: [CommonModule, FormsModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  stockPrice = signal(100);
  toasts = signal<Toast[]>([]);
  alertLimit = signal(110);
  private nextId = 1;

  constructor() {
    // effect() - runs whenever stockPrice or alertLimit changes
    effect(() => {
      const price = this.stockPrice();
      const limit = this.alertLimit();

      if(price >= limit) {
        this.addToast(`Stock hit $${price} - above alert $${limit}`, 'danger');
      } else if(price <= 90) {
        this.addToast(`Stock dropped to $${price} - buy opportunity!`, 'success');
      }
    });
  }

  updatePrice(val: number) {
    this.stockPrice.set(val);
  }

  updateLimit(val: number) {
    this.alertLimit.set(val);
  }

  addToast(message: string, type: Toast['type']) {
    const toast: Toast = { id: this.nextId++, message, type };
    this.toasts.update(t => [toast, ...t.slice(0, 4)]);
  }

  removeToast(id: number) {
    this.toasts.update(t => t.filter(toast => toast.id !== id));
  }
}
