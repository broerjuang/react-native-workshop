// @flow

import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import Swiper from 'react-native-swiper';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {SafeAreaView} from 'react-navigation';
import type {NavigationScreenProp} from 'react-navigation';

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {},
  view1: {
    flex: 1,
    backgroundColor: 'aqua',
  },
  view2: {
    flex: 1,
    backgroundColor: 'green',
  },
  view3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  view4: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

type Props = {
  navigation: NavigationScreenProp<*>;
};

class LoginScreen extends Component<Props, {visible: boolean}> {
  static navigationOptions = {
    headerMode: 'none',
    header: null,
  };
  state = {
    visible: false,
  };
  signInButtonPosition = () => {
    let {height, width} = Dimensions.get('window');
    return {
      position: 'absolute',
      backgroundColor: 'black',
      width: Math.floor(width / 3),
      height: Math.floor(height / 12),
      right: Math.floor(width / 3),
      bottom: Math.floor(height / 6),
    };
  };

  render() {
    let signInForm = () => {
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
          <View style={styles.view1}>
            <Text>Test</Text>
          </View>
          <View style={styles.view2}>
            <Text>Test</Text>
          </View>
          <View style={styles.view3}>
            <Text>Test</Text>
          </View>
          <View style={styles.view4}>
            <Text>Test</Text>
          </View>
        </Swiper>
        <Button
          title="Sign In"
          style={this.signInButtonPosition()}
          onPress={() => {
            this.setState({visible: true});
          }}
        />
        <SlidingUpPanel
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}
          allowDragging={false}
        >
          <signInForm />
        </SlidingUpPanel>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
