import React from 'react';
import renderer from 'react-test-renderer';
import {ParallaxButtons} from '../index';

describe('Icon', () => {
  it('should render Icon corectly', () => {
    let component = renderer.create(
      <ParallaxButtons name={'md-star'} value={16} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
