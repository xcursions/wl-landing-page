import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OAuthLayout from "../layout/OAuthLayout";
import Access from "../pages/Access";
import Login from "../pages/Login";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<OAuthLayout />}>
          <Route path="/" exact element={<Login />} />
          <Route path="/access" element={<Access />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRouter;
