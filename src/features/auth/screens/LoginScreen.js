// @flow

import React, {Component} from 'react';
import {View} from 'react-native';
import Button from '../../../general/core-ui/Button';
class LoginScreen extends Component<{}> {
  render() {
    return (
      <View>
        <Button
          title={'login'}
          onPress={() => console.log('tes')}
          styles={{underlayColor: 'black'}}
        />
      </View>
    );
  }
}

export default LoginScreen;
