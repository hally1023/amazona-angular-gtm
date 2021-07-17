import { Action, createReducer, on } from '@ngrx/store';
import {
  userSignin,
  userSigninFailure,
  userSigninSuccess,
} from 'src/app/actions/user/signin.actions';
import { UserDetails } from 'src/app/models/user-details.model';

export const userSignInFeatureKey = 'userSignIn';

export interface State {
  loading?: boolean;
  userInfo?: UserDetails;
  error?: any;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(userSignin, (state, {}) => ({ loading: true })),
  on(userSigninSuccess, (state, { data }) => ({
    loading: false,
    userInfo: data,
  })),
  on(userSigninFailure, (state, { error }) => ({ loading: false, error }))
);
