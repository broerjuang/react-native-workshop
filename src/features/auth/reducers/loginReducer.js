// @flow

import type {LoginAction} from '../types';

type InitialState = {
  isLogin: boolean;
  onRequest: boolean;
  userName: string;
};

let initialState: InitialState = {
  isLogin: false,
  onRequest: false,
  userName: '',
  onRequest: false,
};

function loginReducer(state: InitialState = initialState, action: LoginAction) {
  switch (action.type) {
    case 'ACTIONS/AUTH_GITHUB_SUCCED':
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        currentUsers: action.payload.currentUser,
      };
    case 'ACTIONS/AUTH_GITHUB_REQUESTED':
      return state;
    case 'ACTIONS/AUTH_GITHUB_FAILED':
      return {...state, message: action.payload.message};
    default:
      return state;
  }
}

export default loginReducer;
