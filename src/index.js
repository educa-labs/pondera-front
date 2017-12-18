/* global document */
/* global navigator */
/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import App from './containers/App';
import store from './config/configureStore';
import './styles/index.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter>
          <Component />
        </HashRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

// if ('serviceWorker' in navigator) {
//   runtime.register()
//     .then(() => console.log('Service worker registerd!'));
// }

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    if (process.env.NODE_ENV === 'development') {
      require('./containers/Simula');
      require('./containers/Landing');
    }
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}
