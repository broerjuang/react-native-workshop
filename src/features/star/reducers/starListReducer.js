// @flow
import type {RepoFromAPI} from '../types';
type RepositoryListAction = {
  type: 'STARRED_REPOSITORY_SUCCESS';
  payload: {uri: string; data: Array<RepoFromAPI>};
};
type InitialState = {
  lastUri?: string;
  lastResult?: Array<RepoFromAPI>;
};

let initialState: InitialState = {};

async function repositoryListReducer(
  state: InitialState = initialState,
  action: RepositoryListAction,
) {
  switch (action.type) {
    case 'STARRED_REPOSITORY_SUCCESS':
      return {
        ...state,
        lastUri: action.payload.uri,
        lastResult: action.payload.data,
      };
    default:
      return state;
  }
}

export default repositoryListReducer;
