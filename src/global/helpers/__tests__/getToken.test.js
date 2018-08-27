// @flow
import getToken from '../getToken';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should getData', () => {
  // Initialize mockstore with empty state
  const initialState = {
    loginReducer: {
      token: '',
    },
  };
  const store: Object = mockStore(initialState);

  expect(getToken(store)).toEqual('');
});
