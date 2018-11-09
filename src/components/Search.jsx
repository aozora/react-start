import React, { Component } from 'react';

class Search extends Component {

  /**
   * Search submit event handler
   */
  onSearchSubmit = (event) => {
    event.preventDefault();

    const term = this.term.value;
    console.log(`term: ${term}`);

    // if the term is empty exit and do nothing
    if (term === ''){
      return;
    }

    // routing...
    console.log('Searching...');
    this.props.history.push(`/search/${term}`);
  };

  render() {
    return (
      <section className="search">
        <form role="search" onSubmit={this.onSearchSubmit}>
          <label htmlFor="search__term">Look for</label>
          <input id="search__term" type="text"
                 ref={(value) => this.term = value}
                 required/>
          <button type="submit" className="button">Search</button>
        </form>
      </section>
    );
  }
}

export default Search;
