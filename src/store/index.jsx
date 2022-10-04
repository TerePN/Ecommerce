import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slice/isLoading.slice";
// import newsSlice from "./slices/news.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    // news: newsSlice
  }
});
