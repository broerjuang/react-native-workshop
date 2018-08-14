// //@flow
import {
  AUTH_GITHUB_REQUESTED,
  AUTH_GITHUB_SUCCED,
  AUTH_GITHUB_FAILED,
  AUTH_GITHUB_LOGOUT,
} from '../actions';
type State = {
  userName: string;
  token: string;
  message: string;
};
type Action = {
  type: string;
  payload?: {
    message: string;
    token: string;
    userName: string;
  };
};
const initialState = {
  userName: '',
  token: '',
  message: '',
  isLoading: true,
};

function loginReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case AUTH_GITHUB_REQUESTED:
      return {...state};
    case AUTH_GITHUB_SUCCED:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        message: 'Success',
      };
    case AUTH_GITHUB_FAILED:
      let message = action.payload.message;
      return {...state, message: message};
    case AUTH_GITHUB_LOGOUT:
      return initialState;
    default:
      return {...state};
  }
}
export default loginReducer;
