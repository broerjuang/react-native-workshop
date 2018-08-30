// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {UserScreen} from '../screens/UserScreen';

describe('UserScreen', () => {
  it('should render UserScreen corectly', () => {
    let component = renderer.create(
      <UserScreen
        navigation={{navigate: (s) => s}}
        handleAction={() => {
          return;
        }}
        userState={{
          userLogin: 'asd',
          userFullName: 'asd',
          userPicture: 'asd',
          sumRepositories: 0,
          sumStars: 0,
          sumFollowers: 0,
          sumFollowing: 0,
          biography: 'asd',
          website: 'asd',
          organizations: [],
        }}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
