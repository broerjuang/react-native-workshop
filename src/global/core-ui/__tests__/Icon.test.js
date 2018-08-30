// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {Icon} from '../index';
let types = {
  ENTYPO: '500px',
  EVIL_ICONS: 'archive',
  FEATHER: 'activity',
  FONTAWESOME: 'glass',
  FOUNDATION: 'address-book',
  IONICONS: 'ios-add-circle',
  OCTICONS: 'alert',
  MATERIAL_ICONS: '3d-rotation',
  MATERIAL_COMMUNITY_ICONS: 'access-point',
  SIMPLE_LINE_ICONS: 'user',
  ZOCIAL: 'acrobat',
};

describe('Icon should render correctly', () => {
  for (let type of Object.keys(types)) {
    it(`should render ${type} corectly`, () => {
      let component: ReactTestRenderer = renderer.create(
        <Icon name={types[type]} size={16} color="grey" type={type} />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  }
});
