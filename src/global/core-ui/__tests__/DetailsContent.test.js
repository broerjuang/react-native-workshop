import React from 'react';
import renderer from 'react-test-renderer';
import {DetailsContent} from '../index';

describe('Icon', () => {
  it('should render Icon corectly', () => {
    let component = renderer.create(<DetailsContent>test</DetailsContent>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
