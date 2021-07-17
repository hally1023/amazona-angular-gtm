import { createAction, props } from '@ngrx/store';
import { UserDetails } from 'src/app/models/user-details.model';

export const userSignin = createAction(
  '[Signin] User Signin',
  props<{ email: string; password: string }>()
);

export const userSigninSuccess = createAction(
  '[Signin] User Signin Success',
  props<{ data: UserDetails }>()
);

export const userSigninFailure = createAction(
  '[Signin] User Signin Failure',
  props<{ error: any }>()
);
