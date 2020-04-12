import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Understanding extends Component {
  state = {
    understanding: ""
  };
  handleChangeFor = event => {
    this.setState({
      understanding: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.understanding === "") {
      alert("Please put a Number Down");
    } else {
      this.props.dispatch({
        type: "ADD_UNDERSTANDING",
        payload: {
          understanding: this.state.understanding
        }
      });
      this.setState({
        understanding: ""
      });
      this.props.history.push("/supported");
    }
  };
  render() {
    return (
      <>
        <h1>How well are you understanding the content?</h1>
        <input
          onChange={this.handleChangeFor}
          placeholder="How did you understand?"
          type="Number"
          value={this.state.understanding}
        />
        <button onClick={this.handleSubmit} type="submit">
          Next
        </button>
      </>
    );
  }
}

export default withRouter(connect()(Understanding));
