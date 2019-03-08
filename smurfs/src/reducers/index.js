import {
  GET_SMURFS,
  FAILURE,
  GET_SMURFS_SUCCESS,
  ADD_SMURF,
  ADD_SMURF_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: true,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        isLoading: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        isLoading: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
