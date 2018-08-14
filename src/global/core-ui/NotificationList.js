// @flow
import React from 'react';
import {View} from 'react-native';

type Props = {
  children?: Array<React$Element<*>>;
};

export function NotificationList(props: Props) {
  let {mainList} = styles;
  let {children, ...otherProps} = props;
  return (
    <View style={mainList} {...otherProps}>
      {children}
    </View>
  );
}

let styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainList: {
    flex: 1,
    margin: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
};
