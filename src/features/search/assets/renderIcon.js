// @flow
import React, {Component} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';

type IconProps = {
  name: string;
  size: number;
  tintColor: string;
};

function renderIcon(props: IconProps) {
  let {name, size, tintColor} = props;
  return <MaterialCommunityIcons name={name} size={size} color={tintColor} />;
}

export default renderIcon;
