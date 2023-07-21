import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blogs/blogSlice";
import postReducer from "../features/post/postSlice";
import relatedPostReducer from "../features/relatedPost/relatedPostSlice";
import updatePostReducer from "../features/updatePost/updatePostSlice";


export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    posts: postReducer,
    relatedPosts: relatedPostReducer,
    updatePost:updatePostReducer
  },
});
