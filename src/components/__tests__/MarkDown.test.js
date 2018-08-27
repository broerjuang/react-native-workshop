import React from 'react';
import renderer from 'react-test-renderer';
import MarkDown from '../MarkDown';

describe('Icon', () => {
  it('should render EventCard corectly', () => {
    let component = renderer.create(<MarkDown content={'hello '} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
