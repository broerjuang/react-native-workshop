// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import ParticipatingScreen from '../screens/ParticipatingScreen';

describe('ParticipatingScreen', () => {
  it('should render ParticipatingScreen corectly', () => {
    let component = renderer.create(
      <ParticipatingScreen navigation={{navigate: (s) => s}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
