import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './sass/app.scss';
import * as serviceWorker from './serviceWorker';

/**
 * Activate React A11Y only for development
 */
if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default;
  a11y(React, ReactDOM, {
    rules: {
      'aria-role': 'error',
      'aria-unsupported-elements': 'error',
      'click-events-have-key-events': 'warn',
      'hidden-uses-tabindex': 'warn',
      'img-uses-alt': 'warn',
      'img-redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']],
      'label-has-for': 'error',
      'mouse-events-have-key-events': 'warn',
      'no-onchange': 'error',
      'onclick-uses-role': 'error'
    }
  });
}

/**
 * Activate PollyJs for dev mocking
 */
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-unused-vars
  const polly = require('./mocks');
  console.log('PollyJs mocks activated!');
}


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
