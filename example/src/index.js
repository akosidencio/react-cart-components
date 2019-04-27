import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import reducers from './reducers'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

//import { CartReducers } from 'react-cart-components'

const initialState = combineReducers({
   //CartReducers, 
   cart: reducers
});

const store = createStore(
  initialState
);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'))
