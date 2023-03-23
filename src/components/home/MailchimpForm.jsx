import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useDispatch } from "react-redux";
import { validEmail } from "../../global/customFunctions";
import { setAlertPopUp, setPageLoading } from "../../store/alert/alertSlice";

const CustomForm = ({ status, message, onValidated }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emptyFields, setEmptyFields] = useState(true);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  useEffect(() => {
    if (status === "sending") {
      dispatch(
        setPageLoading({
          status: true,
          message: "Submitting...",
        })
      );
    }
    if (status === "success") {
      clearFields();
      dispatch(
        setPageLoading({
          status: false,
          message: "",
        })
      );

      dispatch(
        setAlertPopUp({
          status: true,
          type: "SUCCESS",
          title: "Success!",
          desc: "Thank you for subscribing!",
          payload: null,
        })
      );
    }
    if (status === "error") {
      dispatch(
        setPageLoading({
          status: false,
          message: "",
        })
      );

      dispatch(
        setAlertPopUp({
          status: true,
          type: "ERROR",
          title: "Error",
          desc: "Subscription not successful",
          payload: null,
        })
      );
    }
  }, [status]);

  useEffect(() => {
    validateForm();
  }, [email, firstName, lastName, emptyFields, emailError]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setEmailError("");
    setEmptyFields(true);
  };

  const validateForm = () => {
    if (!firstName) {
      setEmptyFields(true);

      return;
    }
    if (!lastName) {
      setEmptyFields(true);

      return;
    }
    if (!email) {
      setEmptyFields(true);

      return;
    }

    if (validEmail(email) === false) {
      setEmailError("invalid email address");
      setEmptyFields(true);
      return false;
    }

    setEmailError("");
    setEmptyFields(false);
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">{status === "success" ? "Success!" : ""}</h3>

      {/* {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )} */}
      {/* {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )} */}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="">First name</label>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter your mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {emailError && (
                <p className="inputError">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 20 20"
                    role="presentation"
                    focusable="false"
                    tabIndex="-1"
                    fill="red"
                  >
                    <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 11c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4H9v-2h2v2z"></path>
                  </svg>
                  <span className="ml-1">{emailError}</span>
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <button
              type="submit"
              className="xcursionButton"
              disabled={emptyFields}
            >
              Join waitlist
            </button>
          </div>
        </div>
      ) : null}

      {/*Close button appears if form was successfully sent*/}
      {/* {status === "success" ? (
        <PrimaryCTAButton
          handleClick={() => setModalOpen(false)}
          label="close"
          size="big"
          customClass="g__justify-self-center"
        />
      ) : (
        <InputField
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      )} */}
    </form>
  );
};

const MailchimpForm = (props) => {
  const url = `https://xcursions.us21.list-manage.com/subscribe/post?u=ec111fee6499d391c81dd7914&amp;id=a539b502a7&amp;f_id=004286e1f0`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
