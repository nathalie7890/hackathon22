import React, { useState } from "react";
import "./App.css"

const EmailForm = ({ isOpen, setIsOpen, setIsValid }) => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const validateHandler = (email) => {
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(validRegex)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
          className="emailInput"
          onChange={onChangeHandler}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
              validateHandler(email);
            }}
            className="emailBtn"
          >
            {!isOpen ? "VALIDATE" : "TRY WITH A DIFFERENT EMAIL"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
