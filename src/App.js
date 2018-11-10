import React, { Component } from 'react';
import './sass/app.scss';
import Router from './router';
import Navigation from './components/Navigation';

class App extends Component {

  // App state (no redux for now)
  state = {
    search: {
      term: ''
    }
  };


  searchForTerm = (term) => {
    this.setState({ search: { term: term } });
  };

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
