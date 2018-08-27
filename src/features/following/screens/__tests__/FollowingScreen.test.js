// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {FollowingScreen} from '../FollowingScreen';

describe('Following screen', () => {
  it('should render Following corectly', () => {
    let component = renderer.create(
      <FollowingScreen
        followingData={[]}
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
