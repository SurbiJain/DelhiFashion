import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import cartSlice from "./cartSlice";


 const store =
  configureStore({
    reducer: {
      cart: cartSliceReducer,
    },
    
  });

export default store;
