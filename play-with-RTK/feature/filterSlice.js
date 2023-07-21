const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
  loading: false,
  videos: [],
  error: "",
};

const filterVideos = createAsyncThunk("video/fetchVideo", async ({ tags, views }) => {
  let totalViews = views;
  let queryString = tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join("&") : "";

  const response = await fetch(`http://localhost:9000/videos?${queryString}`);

  const videos = await response.json();
  const sortedVideos = videos.sort((a, b) => {
    const viewsA = parseFloat(a.views) * 1000;
    const viewsB = parseFloat(b.views) * 1000;

    return viewsB - viewsA;
  });
  console.log(sortedVideos);
  return sortedVideos;
});

const filterSlice = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(filterVideos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(filterVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.videos = action.payload;
    });
    builder.addCase(filterVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.videos = [];
    });
  },
});

module.exports = filterSlice.reducer;
module.exports.filterVideos = filterVideos;
