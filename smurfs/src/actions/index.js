import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const TRY_AGAIN = "TRY_AGAIN";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
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

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FAILURE, payload: "We couldn't delete that smurf" })
    );
};

export const tryAgain = () => dispatch => {
  dispatch({ type: TRY_AGAIN });
};

export const updateSmurf = id => dispatch => {
  dispatch({ type: UPDATE_SMURF, payload: id });
};

export const updatingSmurf = (id, newInfo) => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, newInfo)
    .then(res => dispatch({ type: UPDATE_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FAILURE, payload: "We couldn't update that smurf" })
    );
};
