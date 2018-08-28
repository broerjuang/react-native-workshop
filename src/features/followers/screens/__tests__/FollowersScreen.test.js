// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {FollowersScreen} from '../FollowersScreen';

describe('Followers Screen', () => {
  it('should render Followers corectly', () => {
    let component = renderer.create(
      <FollowersScreen
        followersData={[]}
        handleAction={() => {
          return;
        }}
        navigation={{}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
