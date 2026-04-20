import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-user-search',
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {

  private api = inject(ApiService);

  // Input signals
  searchQuery = signal('');
  selectedRole = signal('all');

  // State signals
  users = signal<any[]>([]);
  loading = signal(false);
  error = signal('');
  apiCalls = signal(0); // tracks how many times API was called

  constructor() {

    // effect() watches searchQuery + selectedRole signals
    // Fires automatically whenever either signal changes
    effect(() => {
      const query = this.searchQuery();
      const role = this.selectedRole();

      // effect reads both signals - re-runs when either changes
      this.loading.set(true);
      this.error.set('');
      this.apiCalls.update(n => n + 1);

      this.api.getUsers(query).subscribe({
        next: (data) => {
          // Filter by search query
          let filtered = data.filter(u => 
            u.name.toLowerCase().includes(query.toLowerCase()) || 
            u.email.toLowerCase().includes(query.toLowerCase())
          );

          // Filter by role signal
          if(role !== 'all') {
            filtered = filtered.filter(u => 
              u.company.bs.includes(role)
            )
          }

          this.users.set(filtered);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load users. Try again.');
          this.loading.set(false);
        }
      });
    });
  }

}
