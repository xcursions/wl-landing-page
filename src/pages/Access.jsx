import React from "react";

import image from "../assets/images/image.png";
import businessTrip from "../assets/images/business-trip.png";
import Group from "../assets/images/Group.png";
import roadMap from "../assets/images/road-map.png";

const Access = () => {
  return (
    <div className="accessWrapper">
      <div className="accessWrapperGrid">
        <div className="accessWrapperGridLeft">
          <div className="accessWrapperGridLeftImages">
            <div className="img_1">
              <img src={image} alt="xcursion" />
              <p>Kigali</p>
            </div>
            <div className="img_2">
              <img src={image} alt="xcursion" />
              <p>Maldives</p>
            </div>
            <div className="img_3">
              <img src={image} alt="xcursion" />
              <p>Beirut</p>
            </div>
            <div className="img_4">
              <img src={image} alt="xcursion" />
              <p>Dubai</p>
            </div>
            <div className="img_5">
              <img src={image} alt="xcursion" />
              <p>Zanzibar</p>
            </div>
          </div>
        </div>
        <div className="loginWrapperGridRight">
          <h3>Get early access!</h3>
          <p>
            We’ve added e_achebe@yahoo.com to the waitlist. You’ll be the first
            to know when you can sign up and claim a username on Xcursions.
          </p>

          <div className="underline">
            <hr />
          </div>

          <div className="mt-3 loginWrapperGridRightAhead">
            <p className="font-weight-bold">1,334 people are ahead of you</p>
            <p>The more you share the sooner you’ll get access</p>
          </div>

          <div className="loginWrapperGridRightFlex d-flex align-items-center">
            <div className="loginWrapperGridRightFlexItem">
              <p>Xcursions.app/claim/eachebe</p>
            </div>
            <div className="loginWrapperGridRightFlexItem">
              <i className="bx bxs-copy" style={{ fontSize: 26 }}></i>
              <p>Copy</p>
            </div>
            <div className="loginWrapperGridRightFlexItem">
              <i className="bx bxl-twitter"></i>
              <p>Twitter</p>
            </div>
            <div className="loginWrapperGridRightFlexItem">
              <i className="bx bxl-facebook-square"></i>
              <p>Facebook</p>
            </div>
            <div className="loginWrapperGridRightFlexItem">
              <i className="bx bxl-whatsapp"></i>
              <p>Whatsapp</p>
            </div>
          </div>

          <div className="accessWrapperGridRightBottom">
            <div className="accessWrapperGridRightBottomItem">
              <img src={businessTrip} alt="xcursion" />
              <div>
                <h4> Save & Travel</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eu gravida enim.{" "}
                </p>
              </div>
            </div>
            <div className="accessWrapperGridRightBottomItem">
              <img src={Group} alt="xcursion" />
              <div>
                <h4> Lifestyle & events</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eu gravida enim.{" "}
                </p>
              </div>
            </div>
            <div className="accessWrapperGridRightBottomItem">
              <img src={roadMap} alt="xcursion" />
              <div>
                <h4>Tours</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eu gravida enim.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
