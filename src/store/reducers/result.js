import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      });
    case actionType.DELETE_RESULT:
      //Methid 1
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      // Method 2
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId,
      );
      return updateObject(state, { results: updatedArray });
    default:
      return state;
  }
};

export default reducer;
