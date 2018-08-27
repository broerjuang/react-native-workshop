// @flow

type Action = {
  type: string;
  payload?: any;
};

type Repo = {
  fullName: string;
  description: string;
  starsCount: number;
  forksCount: number;
  language: string;
  fork: boolean;
};
type User = {
  login: string;
  avatar_url: string;
};

type State = {
  searchKey: string;
  repos: Array<Repo>;
  users: Array<User>;
};

let initialState: State = {
  searchKey: '',
  repos: [],
  users: [],
};

export default function searchReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'SEARCH_INPUT': {
      return {...state, searchKey: action.payload};
    }
    case 'SEARCH_REPOS': {
      return {...state, repos: action.payload};
    }
    case 'SEARCH_USERS': {
      return {...state, users: action.payload};
    }
    case 'CLEAR_SEARCH': {
      return {...state, users: [], repos: []};
    }
    default:
      return state;
  }
}
