import { AuthService } from './../../services/auth/auth.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IAppState } from '../state/app.state';
import firebase from 'firebase';
import { EUserActions, GetUserInfoSuccess } from '../actions/user.actions';
// import { getUserInfoAction, getUserInfoSuccessAction } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private store: Store
  ) {}

  // @Effect()
  // public GetUserInfo$ = this.actions$.pipe(
  //   ofType(EUserActions.GetUserInfo),
  //   switchMap(() =>
  //     this.auth.getUserInfo().pipe(
  //       map((data) => {
  //         console.log('test: ', data);
  //         return new GetUserInfoSuccess(false);
  //       })
  //     )
  //   )
  // );

  // GetUserInfo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     // ofType(getUserInfoAction),
  //     ofType(EUserActions.GetUserInfo),
  //     switchMap(() => {
  //       return this.auth.getUserInfo().pipe(
  //         tap((data) =>
  //           this.store.dispatch(new GetUserInfoSuccess({ user: data }))
  //         ),
  //         map((data: firebase.User | null) => {
  //           // return getUserInfoSuccessAction({ user: data });
  //           console.log('data: ', data);
  //           this.store.dispatch(new GetUserInfoSuccess({ user: data }));
  //           return new GetUserInfoSuccess({ user: data });
  //         })
  //       );
  //     })
  //   )
  // );
}
