import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/Shopcart/productSlice';

 export const store=configureStore({
  reducer:{
   products:productReducer

  }
})