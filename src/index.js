import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, } from 'redux';
import { Provider } from 'react-redux';


const feeling = (state = [], action) => {
    if (action.type === `ADD_FEELING`) {
      // this will replace the pizza list, payload is array of all pizza
      return  action.payload 
    }
    return state;
  }
  const comments = (state = [], action) => {
    if (action.type === `ADD_COMMENTS`) {
      // this will replace the pizza list, payload is array of all pizza
      return  action.payload 
    }
    return state;
  }

  const supported = (state = [], action) => {
    if (action.type === `ADD_SUPPORTED`) {
      // this will replace the pizza list, payload is array of all pizza
      return  action.payload 
    }
    return state;
  }

  const understanding = (state = [], action) => {
    if (action.type === `ADD_UNDERSTANDING`) {
      // this will replace the pizza list, payload is array of all pizza
      return  action.payload 
    }
    return state;
  }


  const storeInstance = createStore(
    combineReducers({ 
        feeling,
        comments,
        supported,
        understanding,
     })
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
