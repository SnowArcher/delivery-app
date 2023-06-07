import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  menulist: 7, //ID of first shop
  cart: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_SHOP":
      return {...state, menulist: action.shop}
    case "CHANGE_VALUE":
      return {...state, cart: state.cart.map(item =>  item.name === action.order.name ? { ...item, value: action.order.count} : item)}
    case "ADD_TO_CART":
      return {...state, cart: state.cart.some(item => item.name === action.item.name)
        ? state.cart.map(item =>
            item.name === action.item.name ? { ...item, value: item.value + 1 } : item
          )
        : [...state.cart, action.item]
      }
    default: 
      return state
  }
}

const store =createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
