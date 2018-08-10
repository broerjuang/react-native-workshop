// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import SettingScreen from '../screens/SettingScreen';

describe('SettingScreen', () => {
  it('should render SettingScreen corectly', () => {
    let component = renderer.create(
      <SettingScreen navigation={{navigate: (s) => s}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
