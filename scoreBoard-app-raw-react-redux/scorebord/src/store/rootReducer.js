import { scoreReducer } from "./scoreReducer";
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  matches:scoreReducer
});
