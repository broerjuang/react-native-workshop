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
  AsyncStorage,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-navigation';
import Modal from 'react-native-modal';
import {USERTOKEN} from './../../../global/constants/asyncStorage';
import {connect} from 'react-redux';
import {clientID, clientSecret, authorizationURI} from '../../../global/env';
import fetchJSON from '../../../global/helpers/fetchJSON';

type Props = {
  navigation: *;
  handleAction: (action: Object) => void;
  token: string;
  isLogin: boolean;
};

type State = {
  visible: boolean;
  loginWidth: number;
  loginHeight: number;
};

type Event = {
  nativeEvent: {layout: {x: number; y: number; width: number; height: number}};
};

export class LoginScreen extends Component<Props, State> {
  state = {
    visible: false,
    loginHeight: 0,
    loginWidth: 0,
  };

  async componentDidMount() {
    try {
      let savedToken = await AsyncStorage.getItem(USERTOKEN);
      // fetch();
      if (savedToken) {
        console.log('saved', savedToken);
        let checkToken = await fetchJSON('user', 'GET', savedToken);
        console.log('check', checkToken);
        if (checkToken.login) {
          await this.props.handleAction({
            type: 'LOGIN_SUCCESS',
            payload: {token: savedToken},
          });
          await this.props.navigation.navigate('GitClient');
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async componentWillUnmount() {
    console.log('umount : ', this.props.token);
  }

  render() {
    let iconSize = 110;
    let height = this.state.loginHeight;
    let width = this.state.loginWidth;
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
            source={{uri: authorizationURI}}
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

  _onLayout(event: Event) {
    const {height, width} = event.nativeEvent.layout;
    if (width !== this.state.loginWidth) {
      this.setState({loginHeight: height, loginWidth: width});
    }
  }

  _onNavigationStateChange = async(navState: Object) => {
    const url: string = navState.url;
    let constant = 'code=';
    if (url.includes(constant)) {
      let code = url.slice(url.indexOf(constant) + 5);
      try {
        let access = await this._createTokenWithCode(code);
        console.log('Token: ', access.access_token);
        console.log('Access: ', access);
        await AsyncStorage.setItem(USERTOKEN, access.access_token);

        this.props.handleAction({
          type: 'LOGIN_SUCCESS',
          payload: {token: access.access_token},
        });

        this.props.navigation.navigate('GitClient');
      } catch (e) {
        console.log(e);
      }
    } else {
    }
  };

  _createTokenWithCode = (code: string) => {
    const url =
      'https://github.com/login/oauth/access_token' +
      `?client_id=${clientID}` +
      `&client_secret=${clientSecret}` +
      `&code=${code}`;
    let content: Promise<Object> = fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        scope: ['repo', 'user', 'notifications', 'gist'],
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

function mapStateToProps(state) {
  return {
    token: state.loginReducer.token,
    isLogin: state.loginReducer.isLogin,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleAction: (action: Object) => dispatch(action),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
