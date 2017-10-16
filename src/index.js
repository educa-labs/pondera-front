/* global document */
/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './config/configureStore';
import './styles/index.scss';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}
