/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import { GET_SMURFS, GET_SMURFS_FAILURE, GET_SMURFS_SUCCESS } from "../actions";

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

    case GET_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
