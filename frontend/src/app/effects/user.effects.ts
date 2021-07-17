import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
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
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userSignin),
      exhaustMap(({ email, password }) =>
        this.userService.signIn({ email, password }).pipe(
          map((authDetails) => userSigninSuccess({ data: authDetails })),
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
          map((authDetails) => userRegisterSuccess({ data: authDetails })),
          catchError((error) => of(userRegisterFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}
}
