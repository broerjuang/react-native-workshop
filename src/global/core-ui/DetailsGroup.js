//@flow

import React, {Children} from 'react';
import {View, Text} from 'react-native';

type DetailsGroupProps = {
  name: string;
  right?: ReactEl;

  children: ReactEl;
};

export default function DetailsGroup(props: DetailsGroupProps) {
  let {name, children, right, ...otherProps} = props;
  let rightContent = React.isValidElement(props.right) ? props.right : null;
  return (
    <View>
      <View {...otherProps} style={styles.containerProfileDetailsTitle}>
        <Text style={styles.txtProfileDetailsTitle}>{name}</Text>
        <View> {right} </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerProfileDetailsBody: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
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
