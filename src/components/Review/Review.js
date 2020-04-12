import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class Review extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/understanding");
}
  render() {
    console.log(this.props)
    return (
      <div>
          <h1>Review</h1>
          <p>Feeling:{this.props.feeling.feeling}</p>
          <p>Understanding:{this.props.understanding.understanding}</p>
          <p>Support:{this.props.supported.supported}</p>
          <p>Comments:{this.props.comments.comments}</p>
          <button onClick={this.handleSubmit} type="submit">Finish Review</button>
      </div>
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
  feeling:reduxStore.feeling,
  comments:reduxStore.comments,
  supported:reduxStore.supported,
  understanding:reduxStore.understanding
})

export default connect(putReduxStateOnProps)(Review);