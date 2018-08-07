// @flow

import React, {Component} from 'react';
import {ButtonGroup} from 'react-native-elements';

import type {NavigationScreenProp} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<{}>;
};

type State = {
  selectedIndex: number;
};
export default class TabBarButtonGroup extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  updateIndex(selectedIndex: number) {
    this.setState({selectedIndex}, () => {
      switch (this.state.selectedIndex) {
        case 0:
          this.props.navigation.navigate('Unread');
          break;

        case 1:
          this.props.navigation.navigate('Participating');
          break;

        case 2:
          this.props.navigation.navigate('All');
          break;

        default:
          break;
      }
    });
  }

  render() {
    const buttons = ['Unread', 'Participating', 'All'];
    return (
      <ButtonGroup
        buttons={buttons}
        onPress={this.updateIndex.bind(this)}
        selectedIndex={this.state.selectedIndex}
      />
    );
  }
}
