import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";

export const rootReducer =combineReducers({
  books:bookReducer
})