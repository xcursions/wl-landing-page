import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alert/alertSlice";

export const store = configureStore({
  reducer: {
    alert: alertSlice,
  },
});
