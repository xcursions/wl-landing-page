import React from "react";
import "./alert.scss";
import ForgotPasswordModal from "./ForgotPasswordModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const AllModal = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <ForgotPasswordModal />
    </>
  );
};

export default AllModal;
