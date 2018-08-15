// @flow

import React from 'react';
import {Provider} from 'react-redux';
import RootNavigation from './routes';
import createStore from './global/createStore';

export default function Wrapper() {
  return (
    <Provider store={createStore}>
      <RootNavigation />
    </Provider>
  );
}
