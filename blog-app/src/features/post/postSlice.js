import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postApi";

export const initialState = {
  post: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchPosts = createAsyncThunk("post/fetchPost", async (id) => {
  const posts = await getPost(id);
  return posts;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.post = action.payload;
      
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.post = {};
      });
  },
});

export default postSlice.reducer;
