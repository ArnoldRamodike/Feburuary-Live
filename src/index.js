import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import { Provider } from "react-redux";

const defaultState =  {
  products: [
    {
      name: "Iphone 14 Pro Max",
      color: "Chrome",
      image: "https://stylus.ua/thumbs/138x138/0a/2a/2531793.jpeg",
      price: 599,
      inCart: 1,
      id: 1
    },
    {
      name: "Mac Book Pro",
      color: "Silver",
      image: "https://stylus.ua/thumbs/138x138/b8/eb/1920922.jpeg",
      price: 699,
      inCart: 1,
      id: 2
    },
    {
      name: "Air Tag",
      color: "Green",
      image: "https://stylus.ua/thumbs/138x138/15/3a/2498981.jpeg",
      price: 20,
      inCart: 1,
      id: 3
    },
    {
    name: "Mouse",
    color: "Grey",
    image: "https://stylus.ua/thumbs/138x138/51/19/2080470.png",
    price: 99,
    inCart: 1,
    id: 4
  },
  {
  name: "Keyboard",
  color: "White",
  image: "https://stylus.ua/thumbs/138x138/c3/0e/2389411.jpeg",
  price: 199,
  inCart: 1,
  id: 5
  },
  ],
  cartProducts: [],
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case "ADD_TO_CART":
      return {...state, cartProducts: [...state.cartProducts, action.payload]}

    case "REMOVE_FROM_CART":
      return{ ...state, cartProducts: state.cartProducts.filter((e) => 
        e.id !== action.payload) }

    case "INCREMENT_PRODUCT":
      return {
        ...state, cartProducts: state.cartProducts.map((item) =>{
          if (item.id === action.payload.id) {
            item.inCart += action.payload.increment
          }
          return item
        })
      }
    case "DECREMENT_PRODUCT":
      return {
        ...state, cartProducts: state.cartProducts.map((item) =>{
          if (item.id === action.payload.id) {
            item.inCart -= action.payload.increment
          }
          return item
        })
      }

    default:
      return state
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
         <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

