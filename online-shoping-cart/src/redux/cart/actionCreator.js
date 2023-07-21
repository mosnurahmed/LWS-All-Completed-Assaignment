import { ADD_TO_CART, DELETE_CART, PRODUCT_DECREMENT, PRODUCT_INCREMENT } from "./actionType";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const productIncrement = (id, stock) => {
  return {
    type: PRODUCT_INCREMENT,
    payload: { id, stock },
  };
};
export const productDecrement = (id) => {
  return {
    type: PRODUCT_DECREMENT,
    payload: id,
  };
};
export const productDelete = (id) => {
  return {
    type: DELETE_CART,
    payload: id,
  };
};
