// @flow
import React from 'react';
import Button from '../general/core-ui/Button';
import renderer from 'react-test-renderer';

describe('LoginScreen', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(
      <Button title={'button'} onPress={() => console.log('tes')} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
