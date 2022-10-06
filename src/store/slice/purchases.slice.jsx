import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {}
});

export const getFavoritesThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://news-app-academlo.herokuapp.com/favorites/")
    .then(() => dispatch(/* action */))
    .finally(() => dispatch(setIsLoading(false)));
};

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
