//@flow
import searchReducer from '../reducers/searchReducer.js';

describe('container test', () => {
  it('should equal return reducer correctly', () => {
    let initialState = {
      searchKey: '',
      repos: [],
      users: [],
    };
    let action = {
      type: 'SEARCH_REPOS',
      payload: [
        {
          fullName: 'aji',
          description: 'string',
          starsCount: 2,
          forksCount: 2,
          language: 'string',
          fork: true,
        },
      ],
    };

    expect(searchReducer(initialState, action).repos).toEqual([
      {
        fullName: 'aji',
        description: 'string',
        starsCount: 2,
        forksCount: 2,
        language: 'string',
        fork: true,
      },
    ]);
  });
});
