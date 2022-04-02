import React, { useEffect } from "react";
import SignUp from "../../Components/Auth/SignUp";
import SignUpForm from "../../Components/Auth/SignUpForm";
import CarouselSlider from "../Sliders/CarouselSlider";
import NavBar from "./NavBar";
import axios from "./../../Axios/axios";

const Home = () => {
  // useEffect(() => {
  //   let fetchData = async () => {
  //     let fetchUrl = await axios.get("/series");
  //     console.log(fetchUrl.data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <setion className="lg:w-full md:w-full sm:w-full">
      <article>
        <header>
          <NavBar />
        </header>
        <div>
          <CarouselSlider />
          <SignUp />
        </div>
      </article>
    </setion>
  );
};

export default Home;
