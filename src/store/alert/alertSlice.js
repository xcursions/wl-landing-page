import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logoutPopUp: {
    status: false,
    payload: null,
  },

  loginModal: false,
  registerModal: false,
  forgotPasswordModal: false,
  mobileMenu: false,
  sideBarMenu: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setPageLoading: (state, { payload }) => {
      state.pageLoading = {
        status: payload.status,
        message: payload.message,
      };
    },

    setLoginModal: (state, { payload }) => {
      state.loginModal = payload;
    },

    setRegisterModal: (state, { payload }) => {
      state.registerModal = payload;
    },

    setForgotPasswordModal: (state, { payload }) => {
      state.forgotPasswordModal = payload;
    },

    setMobileMenu: (state, { payload }) => {
      state.mobileMenu = payload;
    },

    setSideBarMenu: (state, { payload }) => {
      state.sideBarMenu = payload;
    },
  },

  extraReducers: {
    // [getUserInfo.pending]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const {
  setLoginModal,
  setRegisterModal,
  setForgotPasswordModal,
  setMobileMenu,
  setSideBarMenu,
} = alertSlice.actions;

export default alertSlice.reducer;
