// @flow

import React, {Component} from 'react';
// import {View, Text} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';
import type {NavigationScreenProp} from 'react-navigation';
type Props = {
  navigation: NavigationScreenProp<[]>,
};
type State = {
  selectedIndex: number,
};
export default class tabBarButtonGroup extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      currentScreen: '',
    };
  }
  updateIndex(selectedIndex: number) {
    this.setState(
      {
        selectedIndex: selectedIndex,
      },
      () => {
        const {navigation} = this.props;
        // if (this.state.selectedIndex === 0) {
        //   this.props.navigation.navigate('Unread');
        // }
        // if (this.state.selectedIndex === 1) {
        //   navigation.navigate('Participating', {
        //     tryingProps: 'try',
        //   });
        // }
        // if (this.state.selectedIndex === 2) {
        //   this.props.navigation.navigate('All', {
        //     tryingProps: 'trying',
        //   });
        // }
        if (this.state.selectedIndex === 0) {
          this.props.navigation.navigate('Unread');
        }
        if (this.state.selectedIndex === 1) {
          navigation.navigate('Participating');
        }
        if (this.state.selectedIndex === 2) {
          this.props.navigation.navigate('All');
        }
      },
    );
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
