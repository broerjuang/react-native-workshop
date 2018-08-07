// @flow

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import type {NavigationScreenProp} from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons';

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
      <View style={{paddingTop: 40}}>
        <View style={styles.containerSetting}>
          <View style={styles.containerButton}>
            <SettingButton name="Language" />
            <View style={styles.containerBorder}>
              <SettingButton name="Open in Browser" />
            </View>
            <SettingButton name="Privacy Policy" />
            <View style={styles.containerBorder}>
              <SettingButton name="Make a donation" />
            </View>
            <SettingButton name="Sign Out" />
          </View>
        </View>
      </View>
    );
  }
}

function SettingButton(props) {
  return (
    <TouchableOpacity>
      <View style={styles.buttonSetting}>
        <Text style={styles.txtButton}>{props.name}</Text>
        <MaterialIcons name="chevron-right" size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingLeft: 10,
  },
  containerSetting: {
    flexDirection: 'column',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  buttonSetting: {
    height: 50,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerBorder: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export default SettingScreen;
