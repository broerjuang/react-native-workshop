// @flow

import React, {Component} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
  View,
  Text,
  Dimensions,
  Button,
  TouchableOpacity,
  WebView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-navigation';
import Modal from 'react-native-modal';

type Props = {
  navigation: *;
};

type State = {
  visible: boolean;
  loginWidth: number;
  loginHeight: number;
};

type Event = {
  nativeEvent: {layout: {x: number; y: number; width: number; height: number}};
};

class LoginScreen extends Component<Props, State> {
  state = {
    visible: false,
    loginHeight: 0,
    loginWidth: 0,
  };

  clientID = '65604622816426805c88';
  clientSecret = '54fcf0e5666b46739b0ada3c6cab7e407cca6bec';
  _signInButtonPosition = () => {
    let {height, width}: {height: number; width: number} = Dimensions.get(
      'window',
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
    let height = this.state.loginHeight;
    let width = this.state.loginWidth;
    let uri = `https://github.com/login/oauth/authorize?client_id=${
      this.clientID
    }`;
    let SignInForm = () => {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#24292e',
          }}
          onLayout={(e: Object) => {
            this._onLayout(e);
          }}
        >
          <WebView
            source={{uri}}
            onNavigationStateChange={(e: Object) =>
              this._onNavigationStateChange(e)
            }
            style={{
              height,
              width,
              backgroundColor: 'blue',
            }}
          />
          <View>
            <Button
              title="Hide"
              onPress={() => this.setState({visible: false})}
            />
          </View>
        </View>
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
          style={this._signInButtonPosition()}
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

  _onLayout(event: Event) {
    const {height, width} = event.nativeEvent.layout;
    if (height !== this.state.loginHeight) {
      this.setState({loginHeight: height, loginWidth: width});
    }
  }

  _onNavigationStateChange = async(navState: Object) => {
    const url: string = navState.url;
    let constant = 'code=';
    if (url.includes(constant)) {
      let code = url.slice(url.indexOf(constant) + 5);
      let {access_token} = await this._createTokenWithCode(code);
      this.props.navigation.navigate('GitClient');
    }
  };

  _createTokenWithCode = (code: string) => {
    const url =
      'https://github.com/login/oauth/access_token' +
      `?client_id=${this.clientID}` +
      `&client_secret=${this.clientSecret}` +
      `&code=${code}`;
    let content: Object = fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
    return content;
  };
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
