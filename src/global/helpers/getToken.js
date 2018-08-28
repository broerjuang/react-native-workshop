// @flow
import createStore from '../createStore';

function getToken(store?: Object = createStore) {
  return store.getState().loginReducer.token;
}

function select(state: Object, key: string) {
  return state[key];
}

export default getToken;
