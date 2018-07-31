// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import RepositoryScreen from '../RepositoryScreen';

describe('LoginScreen', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(<RepositoryScreen />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
