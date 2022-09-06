import React, { useState } from "react";
import { motion } from "framer-motion";
import EmailForm from "./components/EmailForm";

const variants = {
  open: { scale: 0.8, y: "-50%"},
  closed: { scale: 1 },
};

const valid = {
  open: {opacity: 1},
  closed: {opacity: 0}
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-zinc-900">
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <EmailForm />
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="px-6 py-1 my-8 text-xl border-2 rounded-md text-zinc-400 border-zinc-500 hover:text-white hover:border-white"
          >
            {!isOpen? "VALIDATE" : "TRY WITH A DIFFERENT EMAIL"}
          </button>
        </div>
      </motion.nav>
        <div className="absolute flex flex-col justify-center align-top top-1/2">
      <motion.nav animate={isOpen ? "open" : "closed"} variants={valid}>
          <h1 className="font-semibold text-transparent text-7xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text">EMAIL IS VALID!</h1>
          <p className="mt-6 text-lg text-center text-zinc-500">Some other data</p>
      </motion.nav>
        </div>
    </div>
  );
}

export default App;
