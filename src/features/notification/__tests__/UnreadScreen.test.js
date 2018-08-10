// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import UnreadScreen from '../screens/UnreadScreen';

describe('UnreadScreen', () => {
  it('should render UnreadScreen corectly', () => {
    let component = renderer.create(
      <UnreadScreen
        navigation={{navigate: (s) => s}}
        markAsRead={(s: number) => {
          return;
        }}
        markAllAsRead={() => {
          return;
        }}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
