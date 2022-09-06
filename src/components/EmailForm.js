import React, { useState } from "react";

const EmailForm = ({ handleOnChange }) => {
  const [email, setEmail] = useState('')
  const onChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  
  const validateHandler = (email) => {
    // console.log(typeof(email))
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(validRegex)) {
      alert('Valid!!!!!!!')
      return true
    }

    
    return "false";
  }
  
  return (
    <div className="emailInputContainer">
      <h1 className="formTitle">
        EMAIL
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
      <button onClick={() => validateHandler(email)} className="text-white">Temporary Button</button>
    </div>
  );
};

export default EmailForm;
