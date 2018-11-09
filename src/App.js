import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/app.scss';
import Home from './components/Home';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <section className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            React is running!
          </p>
          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer">
            Learn React
          </a>
        </section>
        <Home></Home>
      </div>
    );
  }
}

export default App;
