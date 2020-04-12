import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Feeling extends Component {
    restart = ()=>{
        this.props.history.push("/");
    }
  render() {
    return (
      <>
      <h2>Submission Success! Thank you for the feedback!</h2>
      <button onClick={this.restart}>Leave New Feedback!</button>
      </>
    );
  }
}

export default withRouter(connect()(Feeling));