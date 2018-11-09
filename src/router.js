import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import NotFound from './components/NotFound';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/search/:term" component={SearchResult}/>
      {/* Catch all route */}
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
