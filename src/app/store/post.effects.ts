import { Injectable, Inject, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { interval, of, EMPTY } from "rxjs";
import { switchMap, mergeMap, map, catchError,
    exhaustMap, takeUntil
 } from "rxjs";
import { PostService } from "../services/post.service";
import * as A from './post.actions';

@Injectable()
export class PostEffects {
    private action$ = inject(Actions);
    private svc = inject(PostService);

    // 1. Initial HTTP load
    load$ = createEffect(() => 
        this.action$.pipe(
            ofType(A.loadPosts),
            exhaustMap(() =>
                this.svc.getPosts(10).pipe(
                    map(posts => A.loadPostsSuccess({ posts })),
                    catchError(err => of(A.loadPostsFailure({ error: err.message })))
                )
            )
        )
    );

    // 2. Auto-start polling after first success
    autoStart$ = createEffect(() => 
        this.action$.pipe(
            ofType(A.loadPostsSuccess),
            map(() =>  A.startPolling())
        )
    );

    // 3. Poll every 5s - stops cleanly on stopPolling
    poll$ = createEffect(() =>
        this.action$.pipe(
            ofType(A.startPolling),
            switchMap(() =>
                interval(5000).pipe(
                    takeUntil(this.action$.pipe(ofType(A.stopPolling))),
                    mergeMap(() =>
                        this.svc.getPosts(10).pipe(
                            map(posts => A.pollPostsSuccess({ posts })),
                            catchError(() => EMPTY)
                        )
                    )
                )
            )
        )
    );
}