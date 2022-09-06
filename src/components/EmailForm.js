import React from "react";

const EmailForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="formTitle">
        EMAIL{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          VALID
        </span>
        ATION
      </h1>
      <input
        type="text"
        spellCheck={false}
        autoFocus={true}
        className="w-2/3 py-2 text-xl text-center text-blue-500 bg-transparent border-b-2 border-zinc-500 focus:outline-none focus:border-white"
      />
    </div>
  );
};

export default EmailForm;
