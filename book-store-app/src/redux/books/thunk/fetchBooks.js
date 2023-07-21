import { loadBooks } from "../actionCreator";

export const fetchBook = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();

  dispatch(loadBooks(books));
};
