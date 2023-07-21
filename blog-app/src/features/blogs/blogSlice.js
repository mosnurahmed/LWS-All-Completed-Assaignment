import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./blogApi";

const initialState = {
  blogs:[],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (value) => {
  const blogs = await getBlog(value);

  return blogs;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }).addCase(fetchBlog.fulfilled,(state, action) =>{
      state.isLoading=false
      state.isError =false
      state.blogs =action.payload
    })
    .addCase(fetchBlog.rejected,(state,action) =>{
      state.isLoading=false
      state.isError=true
      state.error =action.error?.message
      
    })
  },
});

export default blogSlice.reducer
