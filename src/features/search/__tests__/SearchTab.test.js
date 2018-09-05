import renderer from 'react-test-renderer';
import React from 'react';
import {
  SearchTab,
  mapStateToProps,
  mapDispatchToProps,
} from '../assets/SearchTab';

describe('SearchRepositoryScreen Test', () => {
  it('should render SearchRepositoryScreen correctly', () => {
    let component = renderer.create(
      <SearchTab
        navigation={{navigate: (s) => s}}
        handleClearSearch={() => {}}
        handleSearchRepo={() => {}}
        handleSearchUser={() => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should mapStateToProps correctly', () => {
    let result = mapStateToProps({});
    expect(result).toEqual({state: {}});
  });

  it('should mapDispatchToProps correctly', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).handleSearchRepo('test');
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'SEARCH_REPOS',
      payload: {searchInput: 'test'},
    });

    mapDispatchToProps(dispatch).handleSearchUser('test');
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: 'SEARCH_USERS',
      payload: {searchInput: 'test'},
    });

    mapDispatchToProps(dispatch).handleClearSearch();
    expect(dispatch.mock.calls[2][0]).toEqual({
      type: 'CLEAR_SEARCH',
    });
  });
});
