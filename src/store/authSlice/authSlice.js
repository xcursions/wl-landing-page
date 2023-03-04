import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appScreenSize: "",
  siteName: "Xcursions",
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  token: localStorage.getItem("token") || "",
  darkMode: false,
  loginIdentity: null,
  isUserLoggedIn: true,
  // isUserLoggedIn: !!localStorage.getItem("userInfo"),
  pageLoading: {
    status: false,
    message: "",
  },
};

const authSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    setPageLoading: (state, { payload }) => {
      state.pageLoading = {
        status: payload.status,
        message: payload.message,
      };
    },
  },

  extraReducers: {
    // [getUserInfo.pending]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const { setPageLoading } = authSlice.actions;

export default authSlice.reducer;
