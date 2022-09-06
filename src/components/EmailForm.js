import React, { useState } from "react";

const EmailForm = ({ validateHandler }) => {
  const [email, setEmail] = useState("");
  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form>
      <div className="emailInputContainer">
        <h1 className="formTitle">
          EMAIL{" "}
          <span className="emailSpan">VALID</span>
          ATION
        </h1>
        <input
          type="text"
          spellCheck={false}
          autoFocus={true}
          className="emailInput"
          onChange={onChangeHandler}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            validateHandler(email);
          }}
          className="emailBtn"
        >
          Validate
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
