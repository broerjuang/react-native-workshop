//@flow

import React from 'react';
import {Text} from 'react-native';

type DetailsContentProps = {
  children: ReactEl;
};

export default function DetailsContent(props: DetailsContentProps) {
  let {children, ...otherProps} = props;
  return <Text {...otherProps}>{children}</Text>;
}
