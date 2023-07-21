const { getState } = require("./app/store");
const store = require("./app/store");
const { fetchVideo } = require("./feature/videoSlice");
store.subscribe(() => {
  const videos = getState().filter.videos;

});
store.dispatch(fetchVideo());
