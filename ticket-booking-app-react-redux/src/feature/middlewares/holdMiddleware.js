import { rootReducer } from "../rootReducer";

export const holdMiddleware = (store) => (next) => (action) => {
  const getState = store.getState();

  const prevState = getState.booking;
  const nextState = [action].reduce(rootReducer, prevState).booking;
  let nextId = null;

  nextState.map((n) => {
    nextId = n.id;
    return nextId;
  });
   if(nextId <4){
    return next(action);
   }

 
};
