import { createReducer, on } from "@ngrx/store";
import { PostState } from "./post.model";
import * as A from './post.actions';

const initial: PostState = {
    posts: [],
    loading: false,
    error: null,
    lastUpdated: null,
    polling: false
}

export const postReducer = createReducer(
    initial,
  
    on(A.loadPosts, s => ({ ...s, loading: true, error: null })),
    on(A.loadPostsSuccess, (s, { posts }) => ({ 
        ...s, posts, loading: false, 
        lastUpdated: new Date().toLocaleTimeString(),
    })),
    on(A.loadPostsFailure, (s, { error }) => ({
        ...s, loading: false, error
    })),

    on(A.startPolling, s => ({ ...s, polling: true })),
    on(A.stopPolling, s => ({ ...s, polling: false })),
    on(A.pollPostsSuccess, (s, { posts }) => ({
        ...s, posts,
        lastUpdated: new Date().toLocaleTimeString(),
    })),

    on(A.addPost, (s, { post }) => ({
        ...s, posts: [post, ...s.posts]
    })),
    on(A.deletePost, (s, { id }) => ({ ...s, posts: s.posts.filter(p => p.id !== id) }))
);