import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { holdMiddleware } from "./middlewares/holdMiddleware";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(holdMiddleware)));
