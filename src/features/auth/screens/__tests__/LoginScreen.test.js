// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {LoginScreen} from '../LoginScreen';

describe('LoginScreen', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(
      <LoginScreen
        navigation={{navigate: (s) => s}}
        handleAction={(action) => {
          return;
        }}
        token={'sd'}
        isLogin={false}
        userName={''}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
