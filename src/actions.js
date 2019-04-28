import {
  LOAD_CART,
  ADD_PRODUCT,
  UPDATE_CART,
  REMOVE_PRODUCT
} from "./actionTypes";

import storage from './storage';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const updateCart = cartProducts => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let cartTotal = {
    productQuantity,
    totalPrice
  };

  // we persist the cartProducts to localStorage
  storage().persist(JSON.stringify(cartProducts));
  
  return {
    type: UPDATE_CART,
    payload: cartTotal
  };
};
