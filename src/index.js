import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, } from 'redux';
import { Provider } from 'react-redux';


const pizzaList = (state = [], action) => {
    if (action.type === `SET_PIZZA_LIST`) {
      // this will replace the pizza list, payload is array of all pizza
      return  action.payload 
    }
    return state;
  }

  const storeInstance = createStore(
    combineReducers({ 
        pizzaList,
     })
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
