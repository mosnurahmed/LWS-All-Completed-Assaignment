import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updatePost } from "./updatePostApi";

import { initialState } from "../post/postSlice";

export const updatePosts = createAsyncThunk("update/fetchPost", async ({id,value}) => {
 
  const post = await updatePost({id,value});
  return post;
});

const updatePostSlice = createSlice({
  name: "updatePost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updatePosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updatePosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.post = action.payload;
      
      })
      .addCase(updatePosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.post = {};
      });
  },
});

export default updatePostSlice.reducer;
