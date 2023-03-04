import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageLoading: {
    status: false,
    message: "Please wait...",
  },

  alertPopUp: {
    status: false,
    type: "SUCCESS",
    title: "Successful",
    desc: "You are subscribed",
    payload: null,
  },

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

    setAlertPopUp: (state, { payload }) => {
      state.alertPopUp = {
        status: payload.status,
        type: payload.type,
        title: payload.title,
        desc: payload.desc,
        payload: payload.payload,
      };
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

export const { setAlertPopUp, setPageLoading, setMobileMenu, setSideBarMenu } =
  alertSlice.actions;

export default alertSlice.reducer;
