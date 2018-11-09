import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <section className="search">
        <form>
          <input type="text"/>
          <button type="submit" className="button">Search</button>
        </form>
      </section>
    );
  }
}

export default Search;
