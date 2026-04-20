import { Component, computed, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormData {
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-auto-save',
  imports: [CommonModule, FormsModule],
  templateUrl: './auto-save.component.html',
  styleUrl: './auto-save.component.scss'
})
export class AutoSaveComponent {

  private api = inject(ApiService);

  // Form signal — every keystroke updates this
  formData = signal<FormData>({
    title: '',
    body: '',
    userId: 1
  });

  // Status signals
  saveStatus  = signal<'idle' | 'saving' | 'saved' | 'error'>('idle');
  lastSaved   = signal<Date | null>(null);
  saveCount   = signal(0);

  // computed — disable save if title is empty
  isFormValid = computed(() => this.formData().title.trim().length > 0);

  private saveTimer: any = null;

  constructor() {

    // effect() — watches formData signal
    // Debounces API call — waits 1 second after last change
    effect(() => {
      const data = this.formData();   // read signal — effect tracks this

      if (!data.title.trim()) return;

      // Clear previous timer — debounce
      clearTimeout(this.saveTimer);

      this.saveStatus.set('saving');

      // Debounce: wait 1 second then call API
      this.saveTimer = setTimeout(() => {
        this.api.saveData(data).subscribe({
          next: () => {
            this.saveStatus.set('saved');
            this.lastSaved.set(new Date());
            this.saveCount.update(n => n + 1);

            // Reset to idle after 2 seconds
            setTimeout(() => this.saveStatus.set('idle'), 2000);
          },
          error: () => {
            this.saveStatus.set('error');
          }
        });
      }, 1000);
    });
  }

  updateField(field: keyof FormData, value: any) {
    this.formData.update(f => ({ ...f, [field]: value }));
  }
}
