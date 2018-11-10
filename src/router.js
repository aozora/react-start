import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Home from './components/Home';
import SearchResults from './components/SearchResults';
import NotFound from './components/NotFound';


const Router = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search/:term" component={SearchResults}/>
        {/* Catch all route */}
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Router;
