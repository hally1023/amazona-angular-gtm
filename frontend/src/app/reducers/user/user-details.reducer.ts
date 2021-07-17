import { Action, createReducer, on } from '@ngrx/store';
import {
  userDetails,
  userDetailsFailure,
  userDetailsSuccess,
} from 'src/app/actions/user/details.actions';
import { UserDetails } from 'src/app/models/user-details.model';

export const userDetailsFeatureKey = 'userDetails';

export interface State {
  loading?: boolean;
  user?: UserDetails;
  error?: any;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(userDetails, (state, {}) => ({ loading: true })),
  on(userDetailsSuccess, (state, { data }) => ({
    loading: false,
    user: data,
  })),
  on(userDetailsFailure, (state, { error }) => ({ loading: false, error }))
);
