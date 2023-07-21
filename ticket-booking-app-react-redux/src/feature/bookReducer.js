import { ADD_BOOK, DELETE_BOOK } from "./helpers/actionType";
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [ ...state,action.payload]
       
    }
    case DELETE_BOOK:{
      return state.filter(b => b.id !== action.payload)
    }
    default: {
      return state;
    }
  }
};

export default bookReducer
