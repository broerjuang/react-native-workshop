import renderer from 'react-test-renderer';
import React from 'react';
import EventDetail from '../screens/EventDetail';
describe('container test', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(<EventDetail />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
