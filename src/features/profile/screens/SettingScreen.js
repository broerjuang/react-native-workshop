// @flow

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

import type {NavigationScreenProp} from 'react-navigation';
import SettingButton from '../../../general/core-ui/SettingButton';

type Props = {};

class SettingScreen extends Component<Props> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<[]>;
  }) => ({
    headerTitle: 'Settings',
    headerLeft: (
      <View style={{paddingLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text> Back </Text>
        </TouchableOpacity>
      </View>
    ),
  });
  render() {
    return (
      <View style={{paddingTop: 40, flex: 1, backgroundColor: 'white'}}>
        <View style={styles.containerSetting}>
          <SettingButton name="Language" />
          <View style={styles.containerBorder} />
          <SettingButton name="Open in Browser" />
          <View style={styles.containerBorder} />
          <SettingButton name="Privacy Policy" />
          <View style={styles.containerBorder} />
          <SettingButton name="Make a donation" />
          <View style={styles.containerBorder} />
          <SettingButton name="Sign Out" color="red" />
        </View>
      </View>
    );
  }
}

const styles = {
  headerLeft: {
    paddingLeft: 10,
  },
  containerSetting: {
    flexDirection: 'column',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    backgroundColor: 'white',
  },
  containerBorder: {
    borderBottomWidth: 1,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    opacity: 0.5,
  },
};

export default SettingScreen;
