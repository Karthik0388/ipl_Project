import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const TopNavBar = () => {
  return (
    <section className="w-full bg-white ">
      <article className="w-full  h-8 items-center mx-auto flex justify-between px-5">
        <div className="basis-1/5 flex justify-start uppercase font-bold  text-gray-500 text-xs">
          IPL 2022
        </div>
        <div className="basis-1/5 flex justify-center font-bold  text-gray-500 text-lg">
          <a href="" className="w-full flex h-8 justify-center items-center">
            <img src="BCCI_logo.png" alt="logo.png" className="w-5 h-5 " />
            <span className="px-1 text-xs font-bold"> BCCI.tv</span>
          </a>
        </div>
        <div className="basis-1/5 h-8 items-center flex justify-evenly font-bold  text-gray-500 text-xs uppercase ">
          Follow ipl
          <span>
            <AiFillFacebook className="w-5 h-5 fill-gray-500" />
          </span>
          <span>
            <AiOutlineInstagram className="w-5 h-5 fill-gray-500" />
          </span>
          <span>
            <AiOutlineTwitter className="w-5 h-5 fill-gray-500" />
          </span>
        </div>
      </article>
    </section>
  );
};

export default TopNavBar;
