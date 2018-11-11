import React from 'react';
import Search from './Search';
import logo from '../logo.svg';

function Home() {
  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        React is running!
      </p>

      <Search/>

    </section>
  );
}

export default Home;
