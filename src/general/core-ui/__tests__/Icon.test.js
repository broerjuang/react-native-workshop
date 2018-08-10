import React from 'react';
import renderer from 'react-test-renderer';
import {Icon} from '../index';

describe('Icon', () => {
  it('should render Icon corectly', () => {
    let component = renderer.create(
      <Icon name="md-star" size={16} color="grey" type="IONICONS" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
