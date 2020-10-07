import * as c from './ActionTypes';

export const requestMatchList = () => ({
  type: c.REQUEST_MATCHLIST
});

export const getMatchListSuccess = (matchList) => ({
  type: c.GET_MATCHLIST_SUCCESS,
  matchList
});

export const getMatchListFailure = (error) => ({
  type: c.GET_MATCHLIST_FAILURE,
  error
})

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestMatchList);
    return fetch(`http://localhost:5000/api/players`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse)
          dispatch(getMatchListSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getMatchListFailure(error));
      });
  }
}