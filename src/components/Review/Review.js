import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'
class Review extends Component {
sendCheckout = () => {
  let data = {
      "feeling": this.props.feeling.feeling,
      "understanding": this.props.understanding.understanding,
      "support": this.props.supported.supported,
      "comments": this.props.comments.comments,
  }
  axios.post(`/reviews`, data)
  .then( (response) => {
      console.log(response)

      
  }).catch( (error) => {
      alert('Bad things happened...')
      console.log('Error in post /reviews', error)
  })
  this.props.dispatch({ type: 'SEND_REVIEW'})
  this.props.history.push("/success");
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
          <button onClick={this.sendCheckout} type="submit">Finish Review</button>
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