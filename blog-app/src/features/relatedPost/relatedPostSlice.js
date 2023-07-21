import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPost } from "./relatedPostApi";

const initialState = {
  relatedPost: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedPost = createAsyncThunk("relatedPost/fetchRelatedPost", async ({ tags, blogId }) => {

  const relatedPost = await getRelatedPost({ tags, blogId });

  return relatedPost;
});

const relatedPostSlice = createSlice({
  name: "relatedPost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedPost = action.payload;
      })
      .addCase(fetchRelatedPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.relatedPost = [];
      });
  },
});

export default relatedPostSlice.reducer;
