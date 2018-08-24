import renderer from 'react-test-renderer';
import React from 'react';
import EventsScreen from '../screens/EventsScreen';
describe('container test', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(
      <EventsScreen navigation={{navigate: (s) => s}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
