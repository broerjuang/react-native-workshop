//@flow

import React, {Children} from 'react';
import {View, Text} from 'react-native';

type DetailsGroupProps = {
  name: string;
  children: ReactEl;
  disabled?: boolean;
};

export default function DetailsGroup(props: DetailsGroupProps) {
  let {name, children, ...otherProps} = props;
  return (
    <View>
      <View {...otherProps} style={styles.containerProfileDetailsTitle}>
        <Text style={styles.txtProfileDetailsTitle}>{name}</Text>
      </View>
      <View style={styles.containerProfileDetailsBody}>
        {Children.map(children, (child: ReactEl, i) => {
          return (
            <View
              key={i}
              {...otherProps}
              style={styles.containerProfileDetailsContent}
            >
              {child}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = {
  containerProfileDetailsTitle: {
    paddingTop: 30,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  containerProfileDetailsBody: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  containerProfileDetailsContent: {
    justifyContent: 'center',
  },
  txtProfileDetailsTitle: {
    fontWeight: 'bold',
  },
};
