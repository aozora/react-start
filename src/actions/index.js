/**
 * Action Creators
 */

/**
 * Search action creator
 * @param term
 * @returns {{type: string, term: *}}
 */
export function search(term) {
  return {
    type: 'SET_TERM',
    term
  }
}
