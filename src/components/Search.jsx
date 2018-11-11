import React from 'react';
import { connect } from 'react-redux'
import { search } from '../actions';

const Search = (dispatch) => {
  let term;

  /**
   * Search submit event handler
   */
  const onSearchSubmit = (event) => {
    event.preventDefault();

    console.log(`term: ${term}`);

    // if the term is empty exit and do nothing
    if (term === '') {
      return;
    }

    // routing...
    console.log('Searching...');
    dispatch(search(term));
    this.props.history.push(`/search/${term}`);
  };

  return (
    <section className="search">
      <form role="search" onSubmit={onSearchSubmit}>
        <label htmlFor="search__term">Look for</label>
        <input id="search__term" type="text"
               ref={(value) => term = value}
               required/>
        <button type="submit" className="button">Search</button>
      </form>
    </section>
  );
}

export default connect()(Search)