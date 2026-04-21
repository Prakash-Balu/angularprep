import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import  * as A from '../../store/post.actions';
import * as S from '../../store/post.selectors';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit, OnDestroy {
  private store = inject(Store);

  // Convert store observables -> Signals
  posts = toSignal(this.store.select(S.selectAllPosts), { initialValue: [] });
  loading = toSignal(this.store.select(S.selectLoading), { initialValue: false });
  error = toSignal(this.store.select(S.selectError), { initialValue: null });
  lastUpdated = toSignal(this.store.select(S.selectLastUpdated),  { initialValue: null });
  polling = toSignal(this.store.select(S.selectPolling), { initialValue: false });
  postCount = toSignal(this.store.select(S.selectPostCount),  { initialValue: 0 });


  ngOnInit() { this.store.dispatch(A.loadPosts()); }
  ngOnDestroy() { this.store.dispatch(A.stopPolling()); }

  simulateNewPost() {
    this.store.dispatch(A.addPost({
      post: {
        id: Date.now(),
        title: `Live - ${new Date().toLocaleTimeString()}`,
        body: 'Simulated real-time push from server.',
        userId: 99,
      }
    }));
  }

  deletePost(id: number) {
    this.store.dispatch(A.deletePost({ id }));
  }

  trackById(_: number, post: { id: number }) {
    return post.id;
  }
}
