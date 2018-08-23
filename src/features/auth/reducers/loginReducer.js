// @flow

import type {LoginAction} from '../actions/loginReducer.action';
type InitialState = {
  token?: string;
  userName?: string;
  isLogin: boolean;
};

let initialState: InitialState = {
  isLogin: false,
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
    default:
      return state;
  }
}

export default loginReducer;
