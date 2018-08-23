// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {AllNotificationsScreen} from '../screens/AllNotificationsScreen';

describe('AllNotificationsScreen', () => {
  it('should render AllNotificationsScreen corectly', () => {
    let component = renderer.create(
      <AllNotificationsScreen
        navigation={{navigate: (s) => s}}
        markAsRead={(s: number) => {
          return;
        }}
        markAllAsRead={() => {
          return;
        }}
        handleAction={(action: Object) => {
          return;
        }}
        allNotificationData={[]}
        unreadNotificationData={[]}
        participatingNotificationData={[]}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
