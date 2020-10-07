import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false, 
  matchList: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_MATCHLIST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_MATCHLIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        matchList: action.matchList
      });
    case c.GET_MATCHLIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};