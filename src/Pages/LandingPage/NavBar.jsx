import React, { Fragment } from "react";
import TopNavBar from "./TopNavbar";
import "./Home.css";
import iplLogo from "../../Resources/ipl-logo-new-old.png";
import fanpolls from "../../Resources/fanpolls.png";
import { BiChevronRight } from "react-icons/bi";

const NavBar = () => {
  return (
    <Fragment className="sm:w-full md:w-full lg:w-full">
      <header className="md:w-full">
        <TopNavBar />
      </header>
      {/*? Navbar 2 starts Here */}
      <section className="w-full h-18 nav text-white">
        <article className="w-11/12 mx-auto py-2 flex">
          <div className="basis-1/5 flex justify-start">
            <a href="">
              <img src={iplLogo} alt="iplLogo.png" className="w-24" />
            </a>
          </div>
          <div className="basis-3/5 flex justify-center">
            <ul className="w-full py-2 flex items-center justify-between uppercase font-bold">
              <li>
                <a href="">Matches</a>
              </li>
              <li>
                <a href="">Videos</a>
              </li>
              <li>
                <a href="">Stats</a>
              </li>
              <li>
                <a href="">Points Table</a>
              </li>
              <li>
                <a href="">fantasy</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">More</a>
              </li>
            </ul>
          </div>
          <div className="basis-1/5 flex justify-end">
            <img src={fanpolls} alt="fanpolls.png" />
          </div>
        </article>
      </section>
      {/*? Navbar 2 ends Here */}
      {/*? Navbar 3 starts Here */}
      <section className="w-full h-18 navBar text-white">
        <article className="w-full mx-auto  flex">
          <div className="basis-3/5 mx-auto py-1 flex justify-center">
            <ul className="w-full py-1 flex items-center justify-between text-xs font-bold">
              <li>
                <a href="" className="w-full flex justify-between">
                  <img
                    src="https://www.iplt20.com/assets/images/trending.png"
                    alt="tending.png"
                    className="w-5 h-5"
                  />
                  <span className="px-2 uppercase">Trending</span>
                </a>
              </li>
              <li>
                <a href="" className="w-full flex">
                  <span>TATA IPL 2022 Schedule</span>
                  <span>
                    <BiChevronRight className="w-5 h-5" />
                  </span>
                </a>
              </li>
              <li>
                <a href="" className="w-full flex">
                  <span>TATA IPL20 Squad</span>
                  <span>
                    <BiChevronRight className="w-5 h-5" />
                  </span>
                </a>
              </li>
              <li>
                <a href="" className="w-full flex">
                  <span>MOBILE Apps</span>
                  <span>
                    <BiChevronRight className="w-5 h-5" />
                  </span>
                </a>
              </li>
              <li>
                <a href="" className="w-full flex">
                  <span>Retention List</span>
                  <span>
                    <BiChevronRight className="w-5 h-5" />
                  </span>
                </a>
              </li>
              <li>
                <a href="" className="w-full flex">
                  <span>IPL Archive</span>
                  <span>
                    <BiChevronRight className="w-5 h-5" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
      {/*? Navbar 3 ends Here */}
    </Fragment>
  );
};

export default NavBar;
