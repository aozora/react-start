import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
