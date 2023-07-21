import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortStatus: "Default",
  search:""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    statusChanged: (state, action) => {
      state.status = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
    sorting: (state, action) => {
      state.sortStatus = action.payload;
    },
    resetSearch:(state) =>{
      state.search=""
    }
  },
});

export default filterSlice.reducer;
export const { statusChanged, search, sorting,resetSearch } = filterSlice.actions;
