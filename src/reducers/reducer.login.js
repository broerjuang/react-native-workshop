// //@flow
import {
  AUTH_GITHUB_REQUESTED,
  AUTH_GITHUB_SUCCED,
  AUTH_GITHUB_FAILED,
} from '../actions';
type State = {
  userName: string;
  token: string;
  message: string;
};
type Action =
  | {
      type: 'ACTIONS/AUTH_GITHUB_REQUESTED';
    }
  | {
      type: 'ACTIONS/AUTH_GITHUB_SUCCED';
      payload: {
        token: string;
      };
    }
  | {type: 'ACTIONS/AUTH_GITHUB_FAILED'; message: string};
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
      let {message = ''} = action.payload;
      return {...state, message: message};
    default:
      return {...state};
  }
}
export default loginReducer;
