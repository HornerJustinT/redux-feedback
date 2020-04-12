import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Comments extends Component {
  state = {
    comments: ''
  };
  handleChangeFor=(event) =>{
    this.setState({
        comments: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_COMMENTS', payload:{
        comments: this.state.comments,
    }})
    this.setState({
        comments:''
    })
    this.props.history.push("/review");
}
  render() {
    return (
      <>
        <h1>Comments</h1>
        <input onChange={this.handleChangeFor} placeholder="How are you comment?" value={this.state.comments} />
        <button onClick={this.handleSubmit} type="submit">Next</button>
      </>
    );
  }
}

export default withRouter(connect()(Comments));