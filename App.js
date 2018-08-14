// @flow
import React, {Component} from 'react';
import store from './src/store';
import {Provider, connect} from 'react-redux';
import Routes from './src/routes';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

const App = reduxifyNavigator(Routes, 'root');
const mapStateToProps = (state) => ({
  state: state.nav,
});
// const navReducer = createNavigationReducer(Routes);
const AppWithNavigationState = connect(mapStateToProps)(App);
class Root extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
export default Root;
