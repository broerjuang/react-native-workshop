//@flow
import searchReducer from '../reducers/searchReducer.js';
import type {Action, State} from '../types/index';

describe('container test', () => {
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
  });
});
