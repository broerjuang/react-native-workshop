// @flow

import React, {Component} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {View, Text, Dimensions, Button, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-navigation';
import Modal from 'react-native-modal';

class LoginScreen extends Component<{}, {visible: boolean}> {
  state = {
    visible: false,
  };
  signInButtonPosition = () => {
    let {height, width}: {height: number; width: number} = Dimensions.get(
      'window'
    );
    return {
      position: 'absolute',
      backgroundColor: 'grey',
      width: Math.floor(width / 3),
      height: Math.floor(height / 12),
      right: Math.floor(width / 3),
      bottom: Math.floor(height / 6),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Math.floor(height / 36),
    };
  };

  render() {
    let iconSize = 110;
    let SignInForm = () => {
      return (
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#24292e',
          }}
        >
          <Text>Here is the content inside panel</Text>
          <View>
            <Button
              title="Hide"
              onPress={() => this.setState({visible: false})}
            />
          </View>
        </SafeAreaView>
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        <Swiper style={styles.swiperContainer} showsButtons={false}>
          <View style={[styles.viewShared, styles.view1]}>
            <Ionicons name="logo-github" size={iconSize} color="white" />
            <Text style={styles.title}>Welcome</Text>
          </View>
          <View style={[styles.viewShared, styles.view2]}>
            <Ionicons
              name="md-checkmark-circle"
              size={iconSize}
              color="white"
            />

            <Text style={styles.title}>This is Testing Program</Text>
          </View>
          <View style={[styles.viewShared, styles.view3]}>
            <Ionicons name="ios-exit-outline" size={iconSize} color="white" />
            <Text style={styles.title}>So Just Login</Text>
          </View>
          <View style={[styles.viewShared, styles.view4]}>
            <Ionicons name="ios-musical-notes" size={iconSize} color="white" />
            <Text style={styles.title}>Enjoy ~ ~ ~ !!!</Text>
          </View>
        </Swiper>
        <TouchableOpacity
          style={this.signInButtonPosition()}
          onPress={() => {
            this.setState({visible: true});
          }}
        >
          <Text style={styles.title}>Sign In</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.visible}
          onBackdropPress={() => {
            this.setState({visible: false});
          }}
          onBackButtonPress={() => {
            this.setState({visible: false});
          }}
        >
          <SignInForm />
        </Modal>
      </SafeAreaView>
    );
  }
}

let styles = {
  container: {
    flex: 1,
  },
  swiperContainer: {},
  viewShared: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    backgroundColor: '#3700b3',
  },
  view2: {
    backgroundColor: 'purple',
  },
  view3: {
    backgroundColor: 'orange',
  },
  view4: {
    backgroundColor: 'red',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default LoginScreen;
