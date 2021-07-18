import { Action, createReducer, on } from '@ngrx/store';
import {
  userRegister,
  userRegisterFailure,
  userRegisterSuccess,
} from 'src/app/actions/user/register.actions';
import {
  userSignin,
  userSigninFailure,
  userSigninSuccess,
} from 'src/app/actions/user/signin.actions';
import { userSignout } from 'src/app/actions/user/signout.actions';
import { userUpdateProfileSuccess } from 'src/app/actions/user/update-profile.actions';
import { UserDetails } from 'src/app/models/user-details.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

const localStorageService = new LocalStorageService();

export const userAuthFeatureKey = 'userAuth';

export interface State {
  loading?: boolean;
  userInfo?: UserDetails | null;
  error?: any;
}

export const initialState: State = {
  userInfo: localStorageService.getUserInfo(),
};

export const reducer = createReducer(
  initialState,
  on(userSignin, (state, {}) => ({ loading: true })),
  on(userSigninSuccess, (state, { data }) => ({
    loading: false,
    userInfo: data,
  })),
  on(userSigninFailure, (state, { error }) => ({ loading: false, error })),
  on(userRegister, (state, {}) => ({ loading: true })),
  on(userRegisterSuccess, (state, { data }) => ({
    loading: false,
    userInfo: data,
  })),
  on(userRegisterFailure, (state, { error }) => ({ loading: false, error })),
  on(userSignout, () => ({})),
  on(userUpdateProfileSuccess, (state, { user }) => ({ userInfo: user }))
);
