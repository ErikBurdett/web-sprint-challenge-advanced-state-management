
import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURF,
    ADD_SMURF_FAILURE,
  } from "../actions";


export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: "",
  };

  const reducer = (state = initialState, action) => {
    //   dispatch({ type: FETCH_SMURFS_START });
    switch (action.type) {
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
        };
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
        };
      case FETCH_SMURFS_START:
        return {
          ...state,
          isLoading: true,
        };
      case ADD_SMURF:
        return {
          ...state,
          smurfs: [...state.smurfs, action.payload],
        };
      case ADD_SMURF_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };

export default reducer;

