import { createAction, props } from '@ngrx/store';
import { AuthDetails } from 'src/app/models/auth-details';

export const userRegister = createAction(
  '[Register] User Register',
  props<{
    name: string;
    email: string;
    password: string;
  }>()
);

export const userRegisterSuccess = createAction(
  '[Register] User Register Success',
  props<{ data: AuthDetails }>()
);

export const userRegisterFailure = createAction(
  '[Register] User Register Failure',
  props<{ error: any }>()
);
