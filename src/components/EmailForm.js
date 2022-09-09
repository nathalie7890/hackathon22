import React, { useState } from "react";
import "./App.css";

const EmailForm = ({ isOpen, setIsOpen, setIsValid, setEmailData }) => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  
  // const validateHandler = (email) => {
  //   let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //   if (email.match(validRegex)) {
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //   }
  // };

  const axios = require("axios");

  const onclickHandler = (e) => {
    e.preventDefault();
    
    if (email.length >= 1) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        validateHandler(email);
      }
    } else {
      alert("Please enter an email address.");
    }
  };

  const validateHandler = (email) => {
    axios
      .get(
        `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${process.env.REACT_APP_API_KEY}&emailAddress=${email}`
      )
      .then((response) => {
        console.log(response.data);
        const { catchAllCheck, disposableCheck, dnsCheck, formatCheck } =
          response.data;

        if (
          catchAllCheck == "false" &&
          disposableCheck == "false" &&
          dnsCheck == "true" &&
          formatCheck == "true"
        )
          setIsValid(true);
        else setIsValid(false);

        setEmailData({
          catchAll: catchAllCheck,
          disposable: disposableCheck,
          dns: dnsCheck,
          format: formatCheck,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <div className="emailInputContainer">
        <h1 className="formTitle">
          EMAIL
          <span className="emailSpan"> VALID</span>
          ATION
        </h1>
        <input
          type="email"
          name="email"
          spellCheck={false}
          autoFocus={true}
          className={`${
            isOpen ? "pointer-events-none" : "pointer-events-auto"
          } emailInput`}
          onChange={onChangeHandler}
        />
        <div className="flex justify-center">
          <button type="submit" onClick={onclickHandler} className="emailBtn">
            {!isOpen ? "VALIDATE" : "TRY WITH A DIFFERENT EMAIL"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
