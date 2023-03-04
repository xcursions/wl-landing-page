/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import OAuthNavBar from "../components/header/OAuthNavBar";
const OAuthLayout = () => {
  return (
    <div className="oauth-wrapper">
      <OAuthNavBar />
      <Outlet />
    </div>
  );
};

export default OAuthLayout;
