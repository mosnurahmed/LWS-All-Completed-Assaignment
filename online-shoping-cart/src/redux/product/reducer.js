import { ADD_PRODUCT } from "./actionType";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const id = state.length + 1;
      const addProduct = {
        id,
        name: action.payload.name,
        category: action.payload.category,
        stock: action.payload.stock,
        price: action.payload.price,
        img: action.payload.img,
      };
      return [...state, addProduct];
    }
    default: {
      return state;
    }
  }
};
export default reducer;
