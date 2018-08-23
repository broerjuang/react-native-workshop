// @flow
import store from '../createStore';

function getToken() {
  let state: string = select(store.getState(), 'loginReducer').token;
  return state;
}

function select(state, key) {
  return state[key];
}

export default getToken;
