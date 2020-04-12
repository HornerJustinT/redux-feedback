import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: ''
  };
  handleChangeFor=(event) =>{
    this.setState({
        feeling: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_FEELING', payload:{
        feeling: this.state.feeling,
    }})
    this.setState({
        feeling:''
    })
    this.props.history.push("/understanding");
}
  render() {
      console.log(this.state.feeling)
    return (
      <>
        <h1>Feeling</h1>
        <input onChange={this.handleChangeFor} placeholder="How are you Feeling?" value={this.state.feeling} />
        <button onClick={this.handleSubmit} type="submit">Next</button>
      </>
    );
  }
}

export default withRouter(connect()(Feeling));