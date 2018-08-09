import React from 'react';
import renderer from 'react-test-renderer';
import RowWith3Column from '../RowWith3Column';
import {View} from 'react-native';

describe('RowWith3Collumn', () => {
  let edge = <View style={{flex: 1, backgroundColor: 'blue'}} />;
  let middle = <View style={{flex: 1, backgroundColor: 'red'}} />;
  it('should render RowWith3Collumn corectly', () => {
    let component = renderer.create(
      <RowWith3Column left={edge} middle={middle} right={edge} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
