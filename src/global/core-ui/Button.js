//@flow
import React from 'react';
import {Button as ButtonReactElement} from 'react-native-elements';
import {DARK_GREY} from '../constants/colors';
type Props = {
  styles?: {
    backgroundColor?: string;
    borderRadius?: number;
    underlayColor?: string;
    fontColor?: string;
    fontFamily?: string;
  };
  title: string;
  onPress: (params?: mixed) => void;
};
const Button = (props: Props) => {
  let {styles = {}, onPress, title, ...otherProps} = props;
  let {
    backgroundColor = DARK_GREY,
    borderRadius = 3,
    underlayColor = 'black',
    fontColor = 'black',
    fontFamily = null,
  } = styles;
  return (
    <ButtonReactElement
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      title={title}
      underlayColor={underlayColor}
      onPress={onPress}
      color={fontColor}
      fontFamily={fontFamily}
      {...otherProps}
    />
  );
};

export default Button;
