// //@flow
import {GITHUB_TOKEN} from '../actions';

type State = {
  token: string;
};
type Action = {
  type: string;
  payload?: State;
};
const initialState = {
  token: '',
};

function tokenReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GITHUB_TOKEN:
      return {...state, ...action.payload};
    default:
      return {...state};
  }
}
export default tokenReducer;
