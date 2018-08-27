// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import {ProfileScreen} from '../ProfileScreen';
import type {ProfileState} from '../../reducers/profileReducer';

let data: ProfileState = {
  userLogin: '',
  userFullName: '',
  sumRepositories: 0,
  sumStars: 0,
  sumFollowers: 0,
  sumFollowing: 0,
};
describe('SettingScreen', () => {
  it('should render SettingScreen corectly', () => {
    let component = renderer.create(
      <ProfileScreen
        navigation={{
          navigate: (s) => {
            return;
          },
        }}
        handleAction={(action: Object) => {}}
        profileState={data}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
