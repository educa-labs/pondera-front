/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';
import reducer from '../redux';

async function configureStore() {
  let logger;
  if (process.env.NODE_ENV === 'development') {
    const logger = await import('redux-logger');
  }
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger)),
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
