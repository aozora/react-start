import { applyMiddleware, compose, createStore } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// import { BrowserRouter } from 'react-router-dom';

// import the root reducer
// import rootReducer from './reducers/index';
import createRootReducer from './reducers';

const defaultState = {
  search: {
    term: ''
  }
};

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history), // root reducer with router state
  defaultState,
  compose(
    applyMiddleware(
      routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  )
);

export default store;

