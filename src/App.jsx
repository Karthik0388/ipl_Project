import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/LandingPage/NavBar";
import Home from "./Pages/LandingPage/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "./Components/Auth/SignUpForm";

const App = () => {
  return (
    <Fragment>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
