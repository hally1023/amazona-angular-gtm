import { createAction, props } from '@ngrx/store';

export const userSignout = createAction('[Signout] User Signout');

export const userSignoutSuccess = createAction(
  '[Signout] User Signout Success'
);
