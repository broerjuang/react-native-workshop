import renderer from 'react-test-renderer';
import React from 'react';
import {renderIcon} from '../assets/renderIcon';

describe('renderIcon test', () => {
  it('should render icon correctly', () => {
    let props = {
      name: 'home',
      size: 32,
      tintColor: '#000',
    };
    let component = renderer.create(<renderIcon {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
