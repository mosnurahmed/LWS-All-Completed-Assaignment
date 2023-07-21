const { configureStore } = require("@reduxjs/toolkit");
const { createStore } = require("redux");
const { createLogger } = require("redux-logger");
const videoReducer = require("../feature/videoSlice");
const filterReducer = require("../feature/filterSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
module.exports = store;
