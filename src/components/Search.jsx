import React, { Component } from 'react';

class Search extends Component {

  /**
   * Search submit event handler
   */
  onSearchSubmit(event) {
    event.preventDefault();

    console.log('Searching...');
  }

  render() {
    return (
      <section className="search">
        <form role="search" onSubmit={this.onSearchSubmit}>
          <input type="text" required/>
          <button type="submit" className="button">Search</button>
        </form>
      </section>
    );
  }
}

export default Search;
