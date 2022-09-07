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
  const [isValid, setIsValid] = useState(true)
console.log(isOpen)
  return (
    <div className="mainContainer">
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <EmailForm isOpen={isOpen} setIsOpen={setIsOpen} setIsValid={setIsValid}/>
      </motion.nav>

      <div className={`${isOpen ? 'z-0' : ''} validContainer`}>
        <motion.nav animate={isOpen ? "open" : "closed"} variants={valid} initial={{ opacity: 0 }}>
          <h1 className={`${isValid ? 'text-emerald-300' : 'text-red-400'} isValid`}>
            {isValid ? "EMAIL IS VALID" : "EMAIL IS NOT VALID"}</h1>
        </motion.nav>
      </div>
    </div>
  );
}

export default App;