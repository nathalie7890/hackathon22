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
  const [email, setEmail] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mainContainer">
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <EmailForm />

        {/* <div className="flex justify-center">
          <button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="emailBtn"
          >
            {!isOpen ? "VALIDATE" : "TRY WITH A DIFFERENT EMAIL"}
          </button>
        </div> */}
      </motion.nav>
      {/* <div className="validContainer">
        <motion.nav animate={isOpen ? "open" : "closed"} variants={valid}>
          <h1 className="isValid">EMAIL IS VALID!</h1>
          <p className="isValidInfo">Some other data</p>
        </motion.nav>
      </div> */}
    </div>
  );
}

export default App;
