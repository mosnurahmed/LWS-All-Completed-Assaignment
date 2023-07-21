import { ADD_BOOK, LOAD_BOOK, UPDATE_BOOK } from "./actionType"


export const loadBooks =(books) =>{
  return{
    type:LOAD_BOOK,
    payload:books
  }
}
export const addBooks =(books) =>{
  return{
    type:ADD_BOOK,
    payload:books
  }
}
export const updateBooks =(books) =>{
  return{
    type:UPDATE_BOOK,
    payload:books
  }
}
export const deleteBooks =(id) =>{
  return{
    type:LOAD_BOOK,
    payload:id
  }
}
