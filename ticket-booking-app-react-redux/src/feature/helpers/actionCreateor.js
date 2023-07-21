import { ADD_BOOK,DELETE_BOOK } from "./actionType"

export const addBook =(id, from, to, date, guest,classes ) =>{

  return {
    type:ADD_BOOK,
    payload:{id, from, to , date , guest, classes}
  }


}
export const  deleteBook = (id) =>{
  return {
    type:DELETE_BOOK,
    payload:id
  }
}