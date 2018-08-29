import renderer from 'react-test-renderer';
import React from 'react';
import {SearchUserScreen, mapStateToProps} from '../screens/SearchUserScreen';
describe('SearchUserScreen Test', () => {
  it('should render SearchUserScreen correctly', () => {
    let component = renderer.create(
      <SearchUserScreen
        users={['aji', 'deany', 'ari', 'jo', 'astrid']}
        navigation={{navigate: (s) => s}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should mapStateToProps correctly', () => {
    let state = {
      searchReducer: {
        users: ['aji', 'deany', 'ari', 'jo', 'astrid'],
      },
    };
    let result = mapStateToProps(state);
    expect(result).toEqual(state.searchReducer);
  });
  
});
