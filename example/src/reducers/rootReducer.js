import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";

import { CartReducers } from 'react-cart-components';

export default combineReducers({
  cart: CartReducers  
  simpleReducer
});
