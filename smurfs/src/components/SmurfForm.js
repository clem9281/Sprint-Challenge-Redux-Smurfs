import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };
  render() {
    const { name, age, height } = this.state;
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={age}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="height"
            placeholder="Height"
            value={height}
            onChange={this.handleChanges}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addSmurf }
)(SmurfForm);
