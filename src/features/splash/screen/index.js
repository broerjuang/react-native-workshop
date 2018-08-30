//@flow
import React from 'react';
import {View, Animated} from 'react-native';
import {LinearGradient} from 'expo';
import {connect} from 'react-redux';
import Easing from './Easing';
type Props = {
  navigation: {navigate: (routes: string) => boolean};
  +handleAction: (action: Object) => void;
  +token: string;
  +isLogin: boolean;
  +userName?: string;
  +onRequest?: boolean;
};

class SplashScreen extends React.Component<Props> {
  spinValue: any;
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.spin();
    this.props.handleAction({
      type: 'ACTIONS/AUTH_GITHUB_REQUESTED',
    });
  }
  componentDidUpdate() {
    if (this.props.isLogin) {
      this.props.navigation.navigate('GitClient');
    } else {
      this.props.navigation.navigate('LoginScreen');
    }
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: '#E6E9EE',
          }}
        />
        <LinearGradient
          colors={['rgba(0,0,0,2)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Animated.Image
            style={{
              width: 227,
              height: 200,
              transform: [{rotate: spin}],
            }}
            source={require('../../../global/assets/images/minecraft.png')}
          />
        </View>
      </View>
    );
  }
}
type StateToProps = {
  loginReducer: {
    token: string;
    isLogin: boolean;
    onRequest?: boolean;
    userName?: string;
    message?: string;
  };
};
type Dispatch = (action: Object) => void;
export function mapStateToProps(state: StateToProps) {
  return {
    isLogin: state.loginReducer.isLogin,
    message: state.loginReducer.message,
  };
}
export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleAction: (action: Object) => dispatch(action),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
