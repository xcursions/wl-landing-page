import React from "react";

import happyAfrican from "../assets/images/happy-african.png";
import wave from "../assets/images/wave.png";

const Login = () => {
  return (
    <div className="loginWrapper">
      <div className="loginWrapperGrid">
        <div className="loginWrapperGridLeft">
          <div
            className="loginWrapperGridLeftFlex d-flex justify-content-between align-items-center"
            style={{ columnGap: 0 }}
          >
            <div className="loginWrapperGridLeftImage">
              <img src={happyAfrican} alt="xcursion" className="imageWoman" />
              <img src={wave} alt="xcursion" className="imageWave" />
            </div>
            <div className="loginWrapperGridLeftContent">
              <h2>Your Experience Starts Here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu gravida enim. Proin magna orci, commodo in fermentum a,
                consequat non augue.
              </p>
              {/* <button className="xcursionButton">Join waitlist</button> */}
            </div>
          </div>
        </div>
        <div className="loginWrapperGridRight">
          <h3>Get early access!</h3>
          <p>
            Be one of the first to create a profile and claim a premium
            username.
          </p>

          <form action="">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="">First name</label>
                  <input type="text" placeholder="First name" />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="">Last name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Enter your mail" />
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <button className="xcursionButton">Join waitlist</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
