/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../redux';

function configureStore() {
  const middlewares = [thunkMiddleware];
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  if (module.hot) {
    module.hot.accept('../redux', () => {
      const nextRootReducer = require('../redux');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export default configureStore();
