import React, { useState } from "react";
import { motion } from "framer-motion";
import EmailForm from "./components/EmailForm";

const variants = {
  open: { scale: 0.8, y: "-50%" },
  closed: { scale: 1 },
};

const valid = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

function App() {  
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [emailData, setEmailData] = useState({
    catchAll: "",
    disposable: "",
    dns: "",
    format: "",
  });

  return (
    <div className="mainContainer">
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <EmailForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsValid={setIsValid}
          setEmailData={setEmailData}
        />
      </motion.nav>

      <div className={`${isOpen ? "z-0" : ""} validContainer`}>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={valid}
          initial={{ opacity: 0 }}
        >
          <h1
            className={`${isValid ? "isValidText" : "isNotValidText"} isValid`}
          >
            {isValid ? "EMAIL IS VALID" : "EMAIL IS NOT VALID"}
          </h1>
          <div className="validInfoContainer">
            <h1>
              Catch-All Email:{" "}
              <span
                className={`${
                  emailData.catchAll === "false"
                    ? "text-red-400"
                    : "text-blue-300"
                }`}
              >
                {emailData.catchAll}
              </span>
            </h1>
            <h1>Disposable Email: <span
                className={`${
                  emailData.catchAll === "false"
                    ? "text-red-400"
                    : "text-blue-300"
                }`}
              >
                {emailData.disposable}
              </span></h1>
            <h1>DNS Check: <span
                className={`${
                  emailData.catchAll === "false"
                    ? "text-red-400"
                    : "text-blue-300"
                }`}
              >
                {emailData.dns}
              </span></h1>
            <h1>Format Check: <span
                className={`${
                  emailData.catchAll === "false"
                    ? "text-red-400"
                    : "text-blue-300"
                }`}
              >
                {emailData.format}
              </span></h1>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}

export default App;
