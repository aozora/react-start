import { createStore /*, compose */} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';

// import the root reducer
import rootReducer from './reducers/index';

const defaultState = {
  search: {
    term: ''
  }
};

// create the store
const store = createStore(rootReducer, defaultState);

export const history  = syncHistoryWithStore(BrowserRouter, store);

export default store;

