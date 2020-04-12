import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Supported extends Component {
  state = {
    supported: ""
  };
  handleChangeFor = event => {
    this.setState({
      supported: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.supported === "") {
      alert("Please put a Number Down");
    } else {
      this.props.dispatch({
        type: "ADD_SUPPORTED",
        payload: {
          supported: this.state.supported
        }
      });
      this.setState({
        supported: ""
      });
      this.props.history.push("/comments");
    }
  };
  render() {
    return (
      <>
        <h1>How well are you being supported</h1>
        <input
          onChange={this.handleChangeFor}
          placeholder="How are you supported?"
          value={this.state.supported}
          type = "Number"
        />
        <button onClick={this.handleSubmit} type="submit">
          Next
        </button>
      </>
    );
  }
}

export default withRouter(connect()(Supported));
