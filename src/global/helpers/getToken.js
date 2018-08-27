// @flow
import createStore from '../createStore';

function getToken(store?: Object = createStore) {
  let {state = ''} = select(store.getState(), 'loginReducer').token;
  return state;
}

function select(state: Object, key: string) {
  return state[key];
}

export default getToken;
