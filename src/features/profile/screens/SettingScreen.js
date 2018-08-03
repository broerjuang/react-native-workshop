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
            <TouchableOpacity>
              <View style={styles.buttonSetting}>
                <Text style={styles.txtButton}>Language</Text>

                <MaterialIcons name="chevron-right" size={30} />
              </View>
            </TouchableOpacity>
            <View style={styles.containerBorder}>
              <TouchableOpacity>
                <View style={styles.buttonSetting}>
                  <Text style={styles.txtButton}>Open in Browser</Text>
                  <MaterialIcons name="chevron-right" size={30} />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonSetting}>
                <Text style={styles.txtButton}>Privacy Policy</Text>
                <MaterialIcons name="chevron-right" size={30} />
              </View>
            </TouchableOpacity>

            <View style={styles.containerBorder}>
              <TouchableOpacity>
                <View style={styles.buttonSetting}>
                  <Text style={styles.txtButton}>Make a donation</Text>
                  <MaterialIcons name="chevron-right" size={30} />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonSetting}>
                <Text style={styles.txtButton}>Sign Out</Text>
                <MaterialIcons name="chevron-right" size={30} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

<<<<<<< HEAD
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
=======
//const styles = StyleSheet.create({});
>>>>>>> Adding profile page
export default SettingScreen;
