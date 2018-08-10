// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import AllNotificationScreen from '../screens/AllNotificationsScreen';

describe('AllNotificationScreen', () => {
  it('should render AllNotificationScreen corectly', () => {
    let component = renderer.create(
      <AllNotificationScreen navigation={{navigate: (s) => s}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
