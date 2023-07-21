import { ADD_PRODUCT } from "./actionType";

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};
