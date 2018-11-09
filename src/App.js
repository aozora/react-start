import React, { Component } from 'react';
import './sass/app.scss';
import Router from './router';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Router/>
      </div>
    );
  }
}

export default App;
