// @flow

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import type {NavigationScreenProp} from 'react-navigation';
import SettingButton from '../../../global/core-ui/SettingButton';

type Props = {
  isLogin: boolean;
  onSignOut: () => void;
  navigation: {navigate: (routes: string) => boolean};
};

export class SettingScreen extends Component<Props> {
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
  componentDidUpdate() {
    if (!this.props.isLogin) {
      this.props.navigation.navigate('LoginScreen');
    }
  }
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
          <SettingButton
            name="Sign Out"
            color="red"
            onPress={() => this.props.onSignOut()}
          />
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
type StateToProps = {
  loginReducer: {
    isLogin: boolean;
  };
};
type Dispatch = (action: Object) => void;
export function mapStateToProps(state: StateToProps) {
  return {
    isLogin: state.loginReducer.isLogin,
  };
}
export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onSignOut: () => dispatch({type: 'ACTIONS/AUTH_GITHUB_SIGNOUT_REQUESTED'}),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingScreen);
