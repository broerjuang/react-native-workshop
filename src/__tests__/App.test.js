// @flow
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('Application', () => {
  it('should render App corectly', () => {
    let component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
