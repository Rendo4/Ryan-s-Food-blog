import  MatchlistReducer from '../../reducers/matchList-reducer';

describe('MatchlistReducer', () => {

  const defaultState = {
    isLoading: false,
    matchList: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(MatchlistReducer(defaultState, {type: null})).toEqual(
      {
        isLoading: false,
        matchList: [],
        error: null
      }
    );
  });
});