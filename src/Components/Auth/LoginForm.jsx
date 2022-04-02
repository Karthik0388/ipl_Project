import React, { useState } from "react";
import { auth } from "./../../Firebase.js";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  let { username, email, password } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      localStorage.setItem("Username", username);
      await signInWithEmailAndPassword(auth, email, password).then(userData => {
        if (userData.user.emailVerified === true) {
          window.location.assign("/");
          toast.success(`successfully logged in with ${email}`);
        } else {
          toast.error("email is not verified");
        }
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="w-full mt-2 ">
      <article className="w-full flex justify-end">
        <form
          className="w-1/4 h-[500px] bg-white flex flex-col justify-center items-center rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="w-full px-10 py-5">
            <lable htmlFor="username">Username</lable>
            <input
              type="text"
              name="username"
              placeholder="Enter Username "
              className="w-full border-2 rounded-md p-2"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="w-full px-10 py-5">
            <lable htmlFor="email">Email</lable>
            <input
              type="email"
              name="email"
              placeholder="Enter Email "
              className="w-full border-2 rounded-md p-2"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full px-10 py-5">
            <lable htmlFor="password">Password</lable>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full border-2 rounded-md p-2"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="w-full px-10 py-5">
            <button
              className="w-full bg-blue-900 text-white border-2 rounded-md p-2 hover:text-blue-900 hover:bg-white "
              onSubmit={handleSubmit}
            >
              LogIn
            </button>
          </div>
          <div className="w-full px-10 py-5">
            Don't have an account{" "}
            <Link to="/signup" className="uppercase text-blue-900 font-bold">
              SignUp
            </Link>
          </div>
        </form>
      </article>
    </section>
  );
};

export default LoginForm;
