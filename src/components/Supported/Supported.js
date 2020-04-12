import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Supported extends Component {
  state = {
    supported: ''
  };
  handleChangeFor=(event) =>{
    this.setState({
        supported: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_SUPPORTED', payload:{
        supported: this.state.supported,
    }})
    this.setState({
        supported:''
    })
    this.props.history.push("/comments");
}
  render() {
    return (
      <>
        <h1>Supported</h1>
        <input onChange={this.handleChangeFor} placeholder="How are you supported?" value={this.state.supported} />
        <button onClick={this.handleSubmit} type="submit">Next</button>
      </>
    );
  }
}

export default withRouter(connect()(Supported));