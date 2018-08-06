// @flow

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import type {NavigationScreenProp} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigation: NavigationScreenProp<[]>;
};

class SettingScreen extends Component<Props> {
  // $FlowFixMe
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Settings',
    headerLeft: (
      <View style={{paddingLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="ios-arrow-dropleft-circle" size={35} color="black" />
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

                <Icon name="ios-arrow-dropright" size={30} />
              </View>
            </TouchableOpacity>
            <View style={styles.containerBorder}>
              <TouchableOpacity>
                <View style={styles.buttonSetting}>
                  <Text style={styles.txtButton}>Open in Browser</Text>
                  <Icon name="ios-arrow-dropright" size={30} />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonSetting}>
                <Text style={styles.txtButton}>Privacy Policy</Text>
                <Icon name="ios-arrow-dropright" size={30} />
              </View>
            </TouchableOpacity>

            <View style={styles.containerBorder}>
              <TouchableOpacity>
                <View style={styles.buttonSetting}>
                  <Text style={styles.txtButton}>Make a donation</Text>
                  <Icon name="ios-arrow-dropright" size={30} />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonSetting}>
                <Text style={styles.txtButton}>Sign Out</Text>
                <Icon name="ios-arrow-dropright" size={30} opacity={0.4} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
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
