import { createAction, props } from '@ngrx/store';
import { UserDetails } from 'src/app/models/user-details.model';

export const userUpdateProfile = createAction(
  '[UpdateProfile] User UpdateProfile',
  props<{ user: Partial<UserDetails> }>()
);

export const userUpdateProfileSuccess = createAction(
  '[UpdateProfile] User UpdateProfile Success'
);

export const userUpdateProfileFailure = createAction(
  '[UpdateProfile] User UpdateProfile Failure',
  props<{ error: any }>()
);
