import { createAction, props } from '@ngrx/store';

import { UserDetails } from 'src/app/models/user-details.model';

export const userDetails = createAction(
  '[Details] User Details',
  props<{ userId: string }>()
);

export const userDetailsSuccess = createAction(
  '[Details] User Details Success',
  props<{ data: UserDetails }>()
);

export const userDetailsFailure = createAction(
  '[Details] User Details Failure',
  props<{ error: any }>()
);
