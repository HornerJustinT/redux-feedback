import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Comments from '../Comments/Comments'
import Understanding from '../Understanding/Understanding'
import Supported from '../Supported/Supported'
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path='/' component={Feeling}/>
          <Route path='/understanding' component={Understanding}/>
          <Route path='/supported' component={Supported}/>
          <Route path='/comments' component={Comments}/>
        </Router>
      </div>
    );
  }
}

export default App;
