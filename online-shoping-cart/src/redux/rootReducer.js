import { combineReducers } from "redux";
import Reducer from "./product/reducer";
import cartReducer from "./cart/cartReducer";

export const rootReducer = combineReducers({
  products: Reducer,
  cart: cartReducer,
});
