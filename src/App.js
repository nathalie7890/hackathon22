import React, { useState } from "react";
import EmailForm from "./components/EmailForm";
import Swal from "sweetalert2";

const App = () => {
  const [isValid, setValid] = useState(false);

  const validateHandler = (email) => {
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let timerInterval;
    
    if (email.match(validRegex)) {
      setValid(true);

      /* Sweet Alert if email is valid */
      Swal.fire({
        icon: "success",
        title: "This email is legit!",
        timer: 3000,
        background: "#27272a",
        color: '#FFFFFF',
        confirmButtonColor: "#3b82f6",
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      /* End of Sweet Alert */
    } else {
      
      /* Sweet Alert if email if not valid */
      Swal.fire({
        icon: "error",
        title: "This email looks phishy.",
        timer: 3000,
        background: "#27272a",
        color: '#FFFFFF',
        confirmButtonColor: "#3b82f6",
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      /* End of Sweet Alert */
    }
  };

  return (
    <div className="mainContainer">
      <EmailForm validateHandler={validateHandler} />
    </div>
  );
};

export default App;
