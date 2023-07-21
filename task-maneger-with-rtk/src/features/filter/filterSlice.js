import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChecked: false,
  tasks: [],
  name:[],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    checkSearch: (state, action) => {
      state.tasks = action.payload;
    },
    addName:(state,action) =>{
      state.name.push(action.payload)
    },
    deleteName:(state,action) =>{
      state.name=state.name.filter(t => t!==action.payload)
    },
    searching: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { checkSearch, searching,addName,deleteName } = filterSlice.actions;
