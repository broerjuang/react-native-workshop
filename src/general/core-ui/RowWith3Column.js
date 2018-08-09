// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
type Props = {
  left?: ReactEl;
  content?: ReactEl;
  right?: ReactEl;
};

type State = {
  minHeight: number;
  height: number;
};

type Event = {
  nativeEvent: {
    layout: {x: number; y: number; width: number; height: number};
  };
};

class RowWith3Column extends Component<Props, State> {
  state = {
    minHeight: 30,
    height: 0,
  };

  rightContent = React.isValidElement(this.props.right)
    ? this.props.right
    : null;

  leftContent = React.isValidElement(this.props.left) ? this.props.left : null;

  middleContent = React.isValidElement(this.props.content)
    ? this.props.content
    : null;

  onLayout(event: Event) {
    const {width, height} = event.nativeEvent.layout;
    this.setState({
      minHeight: Math.floor(width / 6),
      height,
    });
  }

  render() {
    let {minHeight, height} = this.state;
    height = height > minHeight ? height : minHeight;
    return (
      <View
        onLayout={(event: Event) => {
          this.onLayout(event);
        }}
      >
        <View style={styles.container}>
          <View style={[styles.edge, {height}]}>{this.leftContent}</View>
          <View style={[styles.middle, {height}]}>{this.middleContent}</View>
          <View style={[styles.edge, {height}]}>{this.rightContent}</View>
        </View>
      </View>
    );
  }
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
    // alignSelf: 'center',
  },
  edge: {
    width: widthConstantEdge,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default RowWith3Column;
