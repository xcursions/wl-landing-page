import React from "react";
import "./alert.scss";
import AlertModal from "./AlertModal";
import ModalLoading from "./ModalLoading";

const AllModal = () => {
  return (
    <>
      <AlertModal />
      <ModalLoading />
    </>
  );
};

export default AllModal;
