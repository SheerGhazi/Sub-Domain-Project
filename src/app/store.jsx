import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/AuthSlice";

export const store = configureStore({
  reducer: {

    counter: counterSlice
  },
});