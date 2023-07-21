import { ADD_BOOK, DELETE_BOOK, LOAD_BOOK, UPDATE_BOOK } from "./actionType";
import { initialState } from "./initialState";



const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOK: {
      return action.payload;
    }
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case UPDATE_BOOK: {

      return state.map((book) =>{
        if(book.id=== action.payload.id){
        book= action.payload
        }
        return book
      })
    }
    case DELETE_BOOK:{
      return state.filter(book => book.id !== action.payload.id)
    }
    default: {
      return initialState;
    }
  }
};

export default bookReducer
