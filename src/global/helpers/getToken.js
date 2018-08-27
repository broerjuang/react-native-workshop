// @flow
import store from '../createStore';

function getToken() {
  let {state = ''} = select(store.getState(), 'loginReducer').token;
  return state;
}

function select(state: Object, key: string) {
  return state[key];
}

export default getToken;
