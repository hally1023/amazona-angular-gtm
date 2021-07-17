import { Action, createReducer, on } from '@ngrx/store';
import {
  userRegister,
  userRegisterFailure,
  userRegisterSuccess,
} from 'src/app/actions/user/register.actions';
import { UserDetails } from 'src/app/models/user-details.model';

export const userRegisterFeatureKey = 'userRegister';

export interface State {
  loading?: boolean;
  userInfo?: UserDetails;
  error?: any;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(userRegister, (state, {}) => ({ loading: true })),
  on(userRegisterSuccess, (state, { data }) => ({
    loading: false,
    userInfo: data,
  })),
  on(userRegisterFailure, (state, { error }) => ({ loading: false, error }))
);
