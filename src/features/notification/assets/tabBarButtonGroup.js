// @flow

import React, {Component} from 'react';
// import {View, Text} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

type Props = {};

type State = {
  selectedIndex: number;
};
export default class tabBarButtonGroup extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }
  updateIndex(selectedIndex: number) {
    this.setState({selectedIndex});
  }

  render() {
    const buttons = ['Unread', 'Participating', 'All'];
    const {selectedIndex} = this.state;

    return (
      <ButtonGroup
        buttons={buttons}
        onPress={this.updateIndex.bind(this)}
        selectedIndex={selectedIndex}
      />
    );
  }
}
