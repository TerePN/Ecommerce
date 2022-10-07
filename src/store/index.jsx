import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slice/isLoading.slice";
import  productsSlice  from "./slice/products.slice";
import purchasesSlice from "./slice/purchases.slice";


export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    products: productsSlice,
    purchases: purchasesSlice,
  }
});
