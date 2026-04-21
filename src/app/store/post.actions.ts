import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const loadPosts = createAction('[Posts] Load');
export const loadPostsSuccess = createAction('[Posts] Load Success', props<{ posts: Post[] }>());
export const loadPostsFailure = createAction('[POsts] Load Failure', props<{ error: string }>());

export const startPolling = createAction('[Posts] Start Polling');
export const stopPolling = createAction('[Posts] Stop Polling');
export const pollPostsSuccess = createAction('[Posts] Poll Success', props<{ posts: Post[] }>());

export const addPost = createAction('[Posts] Add', props<{ post: Post }>());
export const deletePost = createAction('[Posts] Delete', props<{ id: number }>());