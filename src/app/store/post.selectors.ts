import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.model";

const selectState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(selectState, s => s.posts);
export const selectLoading = createSelector(selectState, s => s.loading);
export const selectError = createSelector(selectState, s => s.error);
export const selectLastUpdated = createSelector(selectState, s => s.lastUpdated);
export const selectPolling = createSelector(selectState, s => s.polling);
export const selectPostCount = createSelector(selectAllPosts, p => p.length);