// @flow

import type {LoginAction} from '../actions/loginReducer.action';
type InitialState = {
  token?: string;
  userName?: string;
  isLogin: boolean;
  onRequest: boolean;
};

let initialState: InitialState = {
  isLogin: false,
  onRequest: false,
};

function loginReducer(state: InitialState = initialState, action: LoginAction) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        userName: action.payload.userName,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        onRequest: true,
      };
    default:
      return state;
  }
}

export default loginReducer;
