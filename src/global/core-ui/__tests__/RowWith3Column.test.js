// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import RowWith3Column from '../RowWith3Column';
import {View} from 'react-native';

describe('RowWith3Collumn', () => {
  let edge = <View style={{flex: 1, backgroundColor: 'blue'}} />;
  let middle = <View style={{flex: 1, backgroundColor: 'red'}} />;
  let onPress = () => {};

  it('should render RowWith3Collumn corectly', () => {
    let component = renderer.create(
      <RowWith3Column
        left={edge}
        middle={middle}
        right={edge}
        isTouchable={undefined}
        style={undefined}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Touchable corectly', () => {
    let component = renderer.create(
      <RowWith3Column
        left={edge}
        middle={middle}
        right={edge}
        isTouchable
        onPress={onPress}
        style={{borderWidth: 1}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
