//@flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

type SettingButtonProps = {
  name: string;
  color?: string;
};

export default function SettingButton(props: SettingButtonProps) {
  let textColor = styles.txtColorDefault;

  if (props.color === 'red') {
    textColor = styles.txtColorRed;
  }

  return (
    <TouchableOpacity>
      <View style={styles.buttonSetting}>
        <Text style={textColor}>{props.name}</Text>
        <MaterialIcons
          name="chevron-right"
          size={30}
          style={styles.reduceOpacity}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  buttonSetting: {
    height: 50,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtColorRed: {
    color: 'red',
  },
  txtColorDefault: {
    color: 'black',
  },
  reduceOpacity: {
    opacity: 0.5,
  },
};
