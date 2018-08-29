//@flow
import searchReducer from '../reducers/searchReducer';
import type {Action, State} from '../types/index';

describe('searchReducer Test', () => {
  it('should equal return reducer correctly', () => {
    let initialState: State = {
      repos: [],
      users: [],
    };
    let action: Action = {
      type: 'SEARCH_REPO_SUCCESS',
      payload: {
        repos: [
          {
            full_name: 'aji',
            description: 'string',
            stargazers_count: 2,
            forks_count: 2,
            language: 'string',
            fork: true,
          },
        ],
      },
    };

    expect(searchReducer(initialState, action).repos).toEqual([
      {
        full_name: 'aji',
        description: 'string',
        stargazers_count: 2,
        forks_count: 2,
        language: 'string',
        fork: true,
      },
    ]);

    action = {
      type: 'SEARCH_USER_SUCCESS',
      payload: {
        users: [
          {
            login: 'aji',
            avatar_url: 'aji.png',
          },
        ],
      },
    };

    expect(searchReducer(initialState, action).users).toEqual([
      {
        login: 'aji',
        avatar_url: 'aji.png',
      },
    ]);

    action = {
      type: 'CLEAR_SEARCH',
    };

    expect(searchReducer(initialState, action).repos).toEqual([]);
    expect(searchReducer(initialState, action).users).toEqual([]);
  });
});
