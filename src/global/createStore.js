// @flow
import {createStore, applyMiddleware} from 'redux';
import rootReducers from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
export default configureStore();
