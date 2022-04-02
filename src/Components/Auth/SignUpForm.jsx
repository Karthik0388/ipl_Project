import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./../../Firebase.js";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import iplLogo from "./../../Resources/ipl-logo-new-old.png";

let Teams = ["CSK", "MI", "RCB", "DC", "KKR", "RR", "GT", "LS", "RR", "PBS"];
const SignUpForm = props => {
  let navigate = useNavigate();
  let { handleLogin } = props;
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    teams: "",
  });
  let { username, email, password, teams } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { username, email, password, teams };
      console.log(payload);
      let userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userData);
      await sendEmailVerification(userData.user);
      toast.info(`Email verification sent to ${email}`);
      navigate("/");
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <section className="w-full h-screen mt-2 ">
      <article className="w-full h-screen flex justify-center items-center">
        <div className="z-50  mr-[200px] flex justify-center">
          <img src={iplLogo} className="w-4/5 h-44" alt="iplLogo.png" />
        </div>
        <form
          className="w-1/3 h-[600px] bg-white flex flex-col justify-center items-center rounded-md "
          onSubmit={handleSubmit}
        >
          <div className="w-full px-10 py-5">
            <lable htmlFor="username">Name</lable>
            <input
              type="text"
              name="username"
              placeholder="Enter UserName"
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
            <lable htmlFor="teams">Teams</lable>
            <select
              name="teams"
              id="teams"
              className="w-full border-2 rounded-md p-2"
              value={teams}
              onChange={handleChange}
            >
              {Teams.map(val => {
                return (
                  <option name="teams" value={val} onChange={handleChange}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full px-10 py-5">
            <button
              className="w-full bg-blue-900 text-white border-2 rounded-md p-2 hover:text-blue-900 hover:bg-white "
              onSubmit={handleSubmit}
              onClick={handleLogin}
            >
              Signup
            </button>
          </div>
          <div className="w-full px-10 py-5 text-center">
            <span>Already having an Account </span>{" "}
            <a className="uppercase font-bold text-blue-900" href="/">
              Login
            </a>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SignUpForm;
