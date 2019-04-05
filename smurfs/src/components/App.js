import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf, updateSmurf } from "../actions";
import "./App.css";

import SmurfForm from "./SmurfForm";
import Loading from "./Loading";
import Error from "./Error";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    const {
      smurfs,
      isLoading,
      error,
      isUpdating,
      smurfUpdateId
    } = this.props.state;
    if (error) {
      return <Error />;
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {isLoading ? <Loading /> : <SmurfForm />}
        <div className="smurfs">
          <ul>
            {smurfs.map(smurf => {
              if (isUpdating && smurf.id === smurfUpdateId) {
                return <SmurfForm key={smurf.id} />;
              }
              return (
                <li key={smurf.id}>
                  <h3>{smurf.name}</h3>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.props.deleteSmurf(smurf.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.props.updateSmurf(smurf.id);
                    }}
                  >
                    Update
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf, updateSmurf }
)(App);
