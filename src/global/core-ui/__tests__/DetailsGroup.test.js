import React from 'react';
import renderer from 'react-test-renderer';
import {DetailsGroup} from '../index';
import {Text} from 'react-native';

describe('Icon', () => {
  it('should render Icon corectly', () => {
    let component = renderer.create(
      <DetailsGroup name={'test'} right={true}>
        <Text>asfsfsdf</Text>
      </DetailsGroup>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
