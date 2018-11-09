import React from 'react';
import logo from '../logo.svg';

function Home() {
  return (
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
  );
}

export default Home;
