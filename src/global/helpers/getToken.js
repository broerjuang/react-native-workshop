// @flow
import createStore from '../createStore';
function getToken(store?: typeof createStore = createStore) {
  return select(store.getState(), 'loginReducer').token;
}

function select(state, key) {
  return state[key];
}

export default getToken;
