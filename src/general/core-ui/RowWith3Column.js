// @flow
import React from 'react';
import {View} from 'react-native';
type Props = {
  left?: ReactEl;
  content?: ReactEl;
  right?: ReactEl;
  style?: Object;
};

function RowWith3Column(props: Props) {
  let rightContent = React.isValidElement(props.right) ? props.right : null;

  let leftContent = React.isValidElement(props.left) ? props.left : null;

  let middleContent = React.isValidElement(props.content)
    ? props.content
    : null;

  let containerStyle = props.style ? props.style : [];
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.edge}>{leftContent}</View>
        <View style={styles.middle}>{middleContent}</View>
        <View style={styles.edge}>{rightContent}</View>
      </View>
    </View>
  );
}

let widthConstantEdge = '15%';
let widthConstantMiddle = '70%';

let styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  middle: {
    padding: 10,
    width: widthConstantMiddle,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    // alignSelf: 'center',
  },
  edge: {
    width: widthConstantEdge,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default RowWith3Column;
