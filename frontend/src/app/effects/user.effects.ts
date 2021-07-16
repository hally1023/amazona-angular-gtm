import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
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

@Injectable()
export class UserEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userSignin),
      exhaustMap(({ email, password }) =>
        this.userService.signIn({ email, password }).pipe(
          map((authDetails) => userSigninSuccess({ data: authDetails })),
          catchError((error) => of(userSigninFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userRegister),
      exhaustMap(({ email, password, name }) =>
        this.userService.register({ email, password, name }).pipe(
          map((authDetails) => userRegisterSuccess({ data: authDetails })),
          catchError((error) => of(userRegisterFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
