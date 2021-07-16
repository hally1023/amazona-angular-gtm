import { createAction, props } from '@ngrx/store';
import { AuthDetails } from 'src/app/models/auth-details';

export const userSignin = createAction(
  '[Signin] User Signin',
  props<{ email: string; password: string }>()
);

export const userSigninSuccess = createAction(
  '[Signin] User Signin Success',
  props<{ data: AuthDetails }>()
);

export const userSigninFailure = createAction(
  '[Signin] User Signin Failure',
  props<{ error: any }>()
);
