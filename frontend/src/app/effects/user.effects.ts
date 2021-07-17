import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import {
  userSignin,
  userSigninFailure,
  userSigninSuccess,
} from '../actions/user/signin.actions';
import {
  userRegister,
  userRegisterFailure,
  userRegisterSuccess,
} from '../actions/user/register.actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  userDetails,
  userDetailsFailure,
  userDetailsSuccess,
} from '../actions/user/details.actions';
import {
  userUpdateProfile,
  userUpdateProfileSuccess,
} from '../actions/user/update-profile.actions';
import {
  userSignout,
  userSignoutSuccess,
} from '../actions/user/signout.actions';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class UserEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userSignin),
      exhaustMap(({ email, password }) =>
        this.userService.signIn({ email, password }).pipe(
          map((userInfo) => {
            this.localStorageService.setUserInfo(userInfo);

            return userSigninSuccess({ data: userInfo });
          }),
          tap(() => this.router.navigate(['/'])),
          catchError((error) =>
            of(userSigninFailure({ error: error.error.message }))
          )
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userRegister),
      exhaustMap(({ email, password, name }) =>
        this.userService.register({ email, password, name }).pipe(
          map((userInfo) => {
            this.localStorageService.setUserInfo(userInfo);

            return userRegisterSuccess({ data: userInfo });
          }),
          tap(() => this.router.navigate(['/'])),
          catchError((error) =>
            of(userRegisterFailure({ error: error.error.message }))
          )
        )
      )
    )
  );

  detailsUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userDetails),
      exhaustMap(({ userId }) =>
        this.userService.detailsUser(userId).pipe(
          map((userDetails) => userDetailsSuccess({ data: userDetails })),
          catchError((error) =>
            of(userDetailsFailure({ error: error.error.message }))
          )
        )
      )
    )
  );

  updateUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userUpdateProfile),
      exhaustMap(({ user }) =>
        this.userService.updateUserProfile(user).pipe(
          map(() => userUpdateProfileSuccess()),
          catchError((error) =>
            of(userDetailsFailure({ error: error.error.message }))
          )
        )
      )
    )
  );

  signout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userSignout),
      map(() => {
        this.localStorageService.removeCartItems();
        this.localStorageService.removeUserInfo();
        this.localStorageService.removeShippingAddress();

        return userSignoutSuccess();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private location: Location,
    private localStorageService: LocalStorageService
  ) {}
}
