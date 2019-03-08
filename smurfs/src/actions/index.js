import axios from "axios";
import { reducer } from "../reducers";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("getting", res);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({
        type: FAILURE,
        payload: "We couldn't find any smurfs"
      })
    );
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FAILURE, payload: "Whoops, something went wrong." })
    );
};
