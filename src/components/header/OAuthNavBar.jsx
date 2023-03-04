import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./header.scss";

import Logo from "../../assets/images/logo.png";
import { setMobileMenu } from "../../store/alert/alertSlice";

const OAuthNavBar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const mobileMenu = useSelector((state) => state.alert.mobileMenu);

  const closeMenu = () => {
    dispatch(setMobileMenu(false));
  };

  useEffect(() => {
    if (navigation) {
      closeMenu();
    }
  }, [navigation]);

  return (
    <>
      <div className="oAuthNavBar">
        <div className="oAuthNavBarFlex d-flex justify-content-between align-items-center">
          <div className="oAuthNavBarFlexLogo">
            <Link to="/">
              <img src={Logo} alt="xcursion" />
            </Link>
          </div>
          <div
            className={`oAuthNavBarFlexMenu  ${mobileMenu ? "showMenu" : ""}`}
          >
            <div className="oAuthNavBarFlexLogo oAuthNavBarFlexLogoMobile">
              <Link to="/">
                <img src={Logo} alt="xcursion" />
              </Link>

              <div className="close-menu-button">
                <i
                  onClick={() => closeMenu()}
                  className="bx bx-x"
                  id="closeAlertModal"
                ></i>
              </div>
            </div>

            <NavLink to="/access" className="top_link">
              Save & Travel
            </NavLink>
            <NavLink to="/" className="top_link">
              About Us
            </NavLink>
            <NavLink to="/" className="top_link">
              FAQs
            </NavLink>
          </div>
          <div className="oAuthNavBarFlexButton">
            <button className="xcursionButton">Join waitlist</button>

            <div
              className="hamburgar"
              onClick={() => dispatch(setMobileMenu(true))}
            >
              <i className="bx bx-menu"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`menu_wrapper_div  ${mobileMenu === true ? "showMenu" : ""}`}
        onClick={() => closeMenu()}
      ></div>
    </>
  );
};

export default OAuthNavBar;
