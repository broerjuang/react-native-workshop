// @flow

type InitialState = {
  token?: string;
  isLogin: boolean;
};

type Action =
  | {
      type: 'LOGINREQUEST' | 'LOGINFAILED';
    }
  | {
      type: 'LOGINSUCCESS';
      payload: {
        token: string;
      };
    };

let initialState: InitialState = {
  isLogin: false,
};

function loginReducer(state: InitialState = initialState, action: Action) {
  switch (action.type) {
    case 'LOGINSUCCESS':
      return {...state, isLogin: true, token: action.payload.token};
    default:
      return state;
  }
}

export default loginReducer;
