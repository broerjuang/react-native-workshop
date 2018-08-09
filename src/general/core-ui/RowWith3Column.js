// @flow
import React, {Component} from 'react';
import {View} from 'react-native';

type Props = {
  left?: ReactEl;
  content?: ReactEl;
  right?: ReactEl;
};

type State = {
  height: number;
};

type Event = {
  nativeEvent: {
    layout: {x: number; y: number; width: number; height: number};
  };
};

class RowWith3Column extends Component<Props, State> {
  state = {
    height: 30,
  };

  rightContent = React.isValidElement(this.props.right)
    ? null
    : this.props.right;

  leftContent = React.isValidElement(this.props.left) ? null : this.props.left;

  middleContent = React.isValidElement(this.props.content)
    ? null
    : this.props.content;

  onLayout(event: Event) {
    const {width} = event.nativeEvent.layout;
    this.setState({
      height: Math.floor(width / 6),
    });
  }

  render() {
    let {height} = this.state;
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
  },
  edge: {
    width: widthConstantEdge,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default RowWith3Column;
