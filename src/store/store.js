import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";
import alertSlice from "./alert/alertSlice";

export const store = configureStore({
  reducer: {
    oauth: authSlice,
    alert: alertSlice,
  },
});
