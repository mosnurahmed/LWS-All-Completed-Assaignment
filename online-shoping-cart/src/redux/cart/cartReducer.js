import { ADD_TO_CART, DELETE_CART, PRODUCT_DECREMENT, PRODUCT_INCREMENT } from "./actionType";
import { initialState } from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = state.find((item) => item.id === action.payload.id);

      return product
        ? state.map((item) => {
            if (item.id === product.id) {
              item.updatedStock = action.payload.updatedStock;
              item.quantity = action.payload.quantity;
            }
            return item;
          })
        : [...state, action.payload];
    }
    case PRODUCT_INCREMENT: {
      return state.map((p) => {
        if (p.id === action.payload.id) {
          if (p.quantity < action.payload.stock) {
            p.quantity += 1;
          }
        }
        return p;
      });
    }
    case PRODUCT_DECREMENT: {
      return state.map((p) => {
        if (p.id === action.payload) {
          if (p.quantity > 0) {
            p.quantity -= 1;
          }
        }
        return p;
      });
    }
    case DELETE_CART: {
      return state.filter((item) => item.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
