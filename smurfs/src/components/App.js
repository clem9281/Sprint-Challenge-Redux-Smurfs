import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import "./App.css";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props);
  }
  render() {
    const { smurfs, isLoading, error } = this.props.state;
    console.log(smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="smurfs">
          <ul>
            {smurfs.map(smurf => (
              <li key={smurf.id}>
                <h3>{smurf.name}</h3>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </li>
            ))}
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
  { getSmurfs }
)(App);
