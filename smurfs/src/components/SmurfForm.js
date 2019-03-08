import React from "react";
import { connect } from "react-redux";
import { addSmurf, updatingSmurf } from "../actions";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  componentDidMount() {
    // if updating populate the state with the smurf info
    if (this.props.state.isUpdating) {
      this.props.state.smurfs.forEach(smurf => {
        if (smurf.id === this.props.state.smurfUpdateId) {
          this.setState({
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
          });
        }
      });
    }
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };
  handleUpdateSmurf = e => {
    e.preventDefault();
    this.props.updatingSmurf(this.props.state.smurfUpdateId, this.state);
  };
  render() {
    const { isUpdating } = this.props.state;
    const { name, age, height } = this.state;
    return (
      <div className="card">
        <form
          onSubmit={isUpdating ? this.handleUpdateSmurf : this.handleAddSmurf}
        >
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
          <button>{isUpdating ? "Update Smurf" : "Add Smurf"}</button>
        </form>
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
  { addSmurf, updatingSmurf }
)(SmurfForm);
