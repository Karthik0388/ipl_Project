import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  let navigate = useNavigate();
  let [display, setDisplay] = useState(false);

  let User = localStorage.getItem("Username");

  let handleDisplay = () => {
    setDisplay(!display);
  };
  let handleLogout = () => {
    let User = localStorage.clear();
    //signOut()
    // .then(toast.success("Successfully logouted"), )
    // .catch(err => toast.error(err.message));
    window.location.assign("/");
  };

  return (
    <section className="w-full ">
      <article>
        <div className="w-full text-white flex justify-end z-10 mr-[-10px] mt-[-763px] px-5">
          {User == null ? (
            ""
          ) : (
            <p className="px-5 py-1">
              <span className="bg-blue-900 px-2 py-1 rounded-md uppercase font-bold">
                {User}
              </span>
            </p>
          )}

          {User == null ? (
            <button
              className="bg-blue-900 px-2 py-1 rounded-md uppercase font-bold"
              onClick={handleDisplay}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-blue-900 px-2 py-1 rounded-md uppercase font-bold"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

        <div>{display == true ? <LoginForm /> : ""}</div>
      </article>
    </section>
  );
};

export default SignUp;
