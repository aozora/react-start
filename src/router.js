import React from 'react';
import { /* BrowserRouter, */ Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import SearchResults from './components/SearchResults';
import NotFound from './components/NotFound';


const Router = () => (
  <ConnectedRouter history={history}>
    <>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route path="/search/:term" component={SearchResults}/>
        {/* Catch all route */}
        <Route component={NotFound}/>
      </Switch>
    </>
  </ConnectedRouter>
);

export default Router;
