import renderer from 'react-test-renderer';
import React from 'react';
import {
  SearchRepositoryScreen,
  mapStateToProps,
} from '../screens/SearchRepositoryScreen';

describe('SearchRepositoryScreen Test', () => {
  it('should render SearchRepositoryScreen correctly', () => {
    let component = renderer.create(
      <SearchRepositoryScreen
        repos={['aji', 'deany', 'ari', 'jo', 'astrid']}
        navigation={{navigate: (s) => s}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should mapStateToProps correctly', () => {
    let state = {
      searchReducer: {
        repos: ['aji', 'deany', 'ari', 'jo', 'astrid'],
      },
    };
    let result = mapStateToProps(state);
    expect(result).toEqual(state.searchReducer);
  });
});
