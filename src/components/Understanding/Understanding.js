import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: ''
  };
  handleChangeFor=(event) =>{
    this.setState({
        understanding: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_UNDERSTANDING', payload:{
        understanding: this.state.understanding,
    }})
    this.setState({
        understanding:''
    })
    this.props.history.push("/supported");
}
  render() {
    return (
      <>
        <h1>Understanding</h1>
        <input onChange={this.handleChangeFor} placeholder="How did you understand?" value={this.state.understanding} />
        <button onClick={this.handleSubmit} type="submit">Next</button>
      </>
    );
  }
}

export default withRouter(connect()(Understanding));
