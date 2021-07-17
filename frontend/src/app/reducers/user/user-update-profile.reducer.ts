import { Action, createReducer, on } from '@ngrx/store';
import {
  userUpdateProfile,
  userUpdateProfileFailure,
  userUpdateProfileSuccess,
} from 'src/app/actions/user/update-profile.actions';

export const userUpdateProfileFeatureKey = 'userUpdateProfile';

export interface State {
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(userUpdateProfile, (state, {}) => ({ loading: true })),
  on(userUpdateProfileSuccess, (state, {}) => ({
    loading: false,
    success: true,
  })),
  on(userUpdateProfileFailure, (state, { error }) => ({
    loading: false,
    error,
  }))
);
