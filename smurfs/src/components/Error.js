import React from "react";
import { connect } from "react-redux";
import { tryAgain } from "../actions";
const Error = props => {
  console.log(props);
  return (
    <div className="card">
      <h2>{props.error}</h2>
      <button
        onClick={e => {
          e.preventDefault();
          props.tryAgain();
        }}
      >
        Try Again
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  error: state.error
});
export default connect(
  mapStateToProps,
  { tryAgain }
)(Error);
