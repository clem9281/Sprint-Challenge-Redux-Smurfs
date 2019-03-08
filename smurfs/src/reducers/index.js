import {
  GET_SMURFS,
  FAILURE,
  GET_SMURFS_SUCCESS,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  TRY_AGAIN,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  UPDATE_SMURF,
  UPDATING_SMURF,
  UPDATE_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: true,
  error: null,
  isUpdating: false,
  smurfUpdateId: null
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
        isLoading: false,
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
    case TRY_AGAIN:
      return {
        ...state,
        error: null
      };
    case DELETE_SMURF:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case UPDATE_SMURF:
      return {
        ...state,
        isUpdating: true,
        smurfUpdateId: action.payload
      };
    case UPDATING_SMURF:
      return {
        ...state,
        isUpdating: false,
        isLoading: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
