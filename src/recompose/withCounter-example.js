// @flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {Text, View, TouchableOpacity} from 'react-native';

// Currying || Partial Applied Function
function withCounter(stateCounter: number, handler) {
  return (WrappedComponent) => {
    return class EnhancedComponent extends Component<{}, { counter: number }> {
      constructor() {
        super(...arguments);
        autobind(this);
        this.state = {
          counter: stateCounter,
        };
      }

      _handleInrement() {
        this.setState(handler);
      }
      render() {
        return (
          <WrappedComponent
            counter={this.state.counter}
            handleCounter={this._handleInrement}
          />
        );
      }
    };
  };
}

type CounterProps = {
  counter: number;
  handleCounter: number => void;
};

function Counter(props: CounterProps) {
  let {counter, handleCounter} = props;
  return (
    <View>
      <TouchableOpacity onPress={handleCounter}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text>Counter: {counter}</Text>
    </View>
  );
}

export default withCounter(0, (prevState) => ({
  counter: prevState.counter + 1,
}))(Counter);
