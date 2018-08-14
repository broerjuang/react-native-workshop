import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

let sagaMiddleware = createSagaMiddleware();
// const middleware = createReactNavigationReduxMiddleware(
//   'root',
//   (state) => state.nav,
// );

function configureStore() {
  let store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      // applyMiddleware(middleware),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore();
