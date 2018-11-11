// rootReducer
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import search from './search';

// const rootReducer = combineReducers({ search, routing: routerReducer });
//
// export default rootReducer;

export default (history) => combineReducers({
  router: connectRouter(history),
  search
  // ... // rest of your reducers
})