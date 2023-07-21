import { createSlice } from "@reduxjs/toolkit"

const initialState={
search:""
}


 const  filterSlice =createSlice({
  name:"filter",
  initialState,
  reducers:{
    searching:(state,action) =>{
      state.search = action.payload
    },
    removeSearching:(state) =>{
      state.search =""
    }
  }
})
export default filterSlice.reducer
export const {searching,removeSearching} =filterSlice.actions