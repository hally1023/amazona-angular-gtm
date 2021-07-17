import { createAction, props } from '@ngrx/store';
import { UserDetails } from 'src/app/models/user-details.model';

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
  props<{ data: UserDetails }>()
);

export const userRegisterFailure = createAction(
  '[Register] User Register Failure',
  props<{ error: any }>()
);
