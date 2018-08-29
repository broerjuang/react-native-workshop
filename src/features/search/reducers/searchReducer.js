// @flow
import type {Action, State} from '../types/index';

let initialState: State = {
  repos: [],
  users: [],
};

export default function searchReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'SEARCH_REPO_SUCCESS': {
      return {...state, repos: action.payload.repos};
    }
    case 'SEARCH_USER_SUCCESS': {
      return {...state, users: action.payload.users};
    }
    case 'CLEAR_SEARCH': {
      return {...state, users: [], repos: []};
    }
    default:
      return state;
  }
}
