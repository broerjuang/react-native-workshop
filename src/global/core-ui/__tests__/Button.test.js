// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';
import {View} from 'react-native';

describe('Button', () => {
  let onPress = () => {};
  let title = 'Button';

  it('should render Button corectly', () => {
    let component = renderer.create(<Button title={title} onPress={onPress} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
