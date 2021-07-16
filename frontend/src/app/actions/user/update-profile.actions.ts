import { createAction, props } from '@ngrx/store';

export const userUpdateProfile = createAction(
  '[UpdateProfile] User UpdateProfile',
  props<{ userId: string }>()
);

export const userUpdateProfileSuccess = createAction(
  '[UpdateProfile] User UpdateProfile Success',
  props<{ data: any }>()
);

export const userUpdateProfileFailure = createAction(
  '[UpdateProfile] User UpdateProfile Failure',
  props<{ error: any }>()
);
