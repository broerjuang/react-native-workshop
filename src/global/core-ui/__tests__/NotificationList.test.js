// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {NotificationList} from '../index';

describe('Icon', () => {
  it('should render Icon corectly', () => {
    let component: ReactTestRenderer = renderer.create(<NotificationList />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
