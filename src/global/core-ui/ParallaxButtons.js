//@flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type ParalaxProps = {
  name: string;
  value: number;
  onPress?: () => boolean;
};

export default function ParallaxButtons(props: ParalaxProps) {
  let {name, value, onPress = null} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styleParallax.buttonRepositories}>
        <Text style={styleParallax.txtButtonValue}> {value} </Text>
        <Text style={styleParallax.txtButton}> {name} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styleParallax = {
  buttonRepositories: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButton: {
    color: 'white',
    fontSize: 14,
  },
  txtButtonValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
};
