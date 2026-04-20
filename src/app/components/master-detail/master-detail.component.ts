import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-master-detail',
  imports: [CommonModule],
  templateUrl: './master-detail.component.html',
  styleUrl: './master-detail.component.scss'
})
export class MasterDetailComponent {

    private api = inject(ApiService);
    
    // Master
    users = signal<any[]>([]);
    selectedUser = signal<any>(null);

    // Detail
    posts = signal<any[]>([]);
    selectedPost = signal<any>(null);

    // Comments (third level)
    comments  = signal<any[]>([]);

    // Loading states per level
    loadingUsers = signal(false);
    loadingPosts = signal(false);
    loadingComments = signal(false);

    // computed() - total posts for selected user
    totalPosts = computed(() => this.posts().length);

    constructor() {

      // Effect 1 - Load users once on init
      // Runs once because no changing signal inside
      effect(() => {
        this.loadingUsers.set(true);
        this.api.getUsers('').subscribe(data => {
          this.users.set(data);
          this.loadingUsers.set(false);
        });
      });

      // effect 2 - Load posts when selectedUser changes
      effect(() => {
        const user = this.selectedUser();
        if(!user) return;

        this.loadingPosts.set(true);
        this.posts.set([]);
        this.selectedPost.set(null);
        this.comments.set([]);

        this.api.getPosts(user.id).subscribe(data => {
          this.posts.set(data);
          this.loadingPosts.set(false);
        });
      });

      // effect 3 - Load comments when selectedPost changes
      effect(() => {
        const post = this.selectedPost();
        if(!post) return;

        this.loadingComments.set(true);
        this.comments.set([]);

        this.api.getComments(post.id).subscribe(data => {
          this.comments.set(data);
          this.loadingComments.set(false);
        });
      });
    }
}
