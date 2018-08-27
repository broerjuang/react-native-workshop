import renderer from 'react-test-renderer';
import React from 'react';
import {SearchUserScreen} from '../screens/SearchUserScreen';
describe('container test', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(
      <SearchUserScreen
        users={['aji', 'deany', 'ari', 'jo', 'astrid']}
        navigation={{navigate: (s) => s}}
        handleAction={(action) => {
          return;
        }}
        token={'sd'}
        isLogin={false}
        userName={''}
        onRequest={false}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
