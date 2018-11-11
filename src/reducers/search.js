/**
 * Search reducer
 * @param state
 * @param action
 */
function search(state = {}, action) {
  console.log(state, action);

  if (action.type === 'SET_TERM') {
    return {
      // take the current state
      ...state,
      // overwrite the search term
      [search['term']]: action.term
    }
  }

  return state;
}

export default search;