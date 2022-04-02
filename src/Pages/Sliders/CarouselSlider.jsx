import React, { Fragment, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "../../Resources/Slide1.jpg";
import Slide2 from "../../Resources/Slide2.jpg";
import Slide3 from "../../Resources/Slide3.jpg";
import Slide4 from "../../Resources/Slide4.jpg";
import { CgNotes } from "react-icons/cg";
import iplTeams from "./PointsTable.json";

const CarouselSlider = () => {
  let [teams, setTeams] = useState(iplTeams);

  let mapData = teams.map(data => {
    return (
      <tr className="w-full flex bg-white mb-2 rounded-lg border-2 border-gray-500">
        <td className="px-2 my-2 flex justify-center ">
          <img src={data.Logo} alt={data.team} className="w-6 h-6" />
        </td>
        <td className="basis-1/4 py-2 font-bold">{data.team}</td>
        <td className="basis-1/4 py-2 font-bold">{data.played}</td>
        <td className="basis-1/4 py-2 font-bold">{data.NetRR}</td>
        <td className="basis-1/4 py-2 font-bold">{data.points}</td>
      </tr>
    );
  });
  return (
    <Fragment>
      <section className="w-full h-screen ">
        <article className="w-full h-screen flex">
          <div className="basis-3/5">
            <Carousel
              autoFocus={true}
              showThumbs={false}
              autoPlay={true}
              interval="2000"
              showStatus={false}
              infiniteLoop={true}
              showIndicators={true}
              className="py-5 pr-5 w-[1047px] relative opacity-100"
            >
              <div className="w-[1047px]">
                <img
                  src={Slide3}
                  alt="slide1.png"
                  className="w-full h-[528px]"
                />
                <div className="text-white w-full  text-left  mt-[-150px] px-5 pt-5">
                  <button className="bg-red-500 text-white font-bold text-sm rounded-md w-20 h-8 hover:bg-white hover:text-red-500 ">
                    <div className="w-20 h-8 flex  justify-center items-center ">
                      <span>
                        <CgNotes />
                      </span>
                      <span className="px-2">Article</span>
                    </div>
                  </button>
                  <p className="text-xl font-bold">
                    BCCI announces schedule for TATA IPL 2022
                  </p>
                  <span className="text-xs font-bold">6 March 2022</span>
                </div>
              </div>
              <div className="w-[1047px]">
                <img
                  src={Slide2}
                  alt="slide2.jpg"
                  className="w-full h-[528px]"
                />
                <div className="text-white w-full  text-left  mt-[-150px] px-5 pt-5">
                  <button className="bg-red-500 font-bold text-sm rounded-md w-20 h-8 hover:bg-white hover:text-red-500  ">
                    <div className="w-20 h-8 flex  justify-center items-center ">
                      <span>
                        <CgNotes />
                      </span>
                      <span className="px-2">Article</span>
                    </div>
                  </button>
                  <p className="text-xl font-bold">
                    Rahmanullah Gurbaz joins Gujarat Titans as a replacement for
                    Jason Roy
                  </p>
                  <span className="text-xs font-bold">09 March 2022</span>
                </div>
              </div>
              <div className="w-[1047px]">
                <img
                  src={Slide1}
                  alt="slide3.jpg"
                  className="w-full h-[528px]"
                />
                <div className="text-white w-full  text-left  mt-[-150px] px-5 pt-5">
                  <button className="bg-red-500 font-bold text-sm rounded-md w-20 h-8 hover:bg-white hover:text-red-500 ">
                    <div className="w-20 h-8 flex  justify-center items-center ">
                      <span>
                        <CgNotes />
                      </span>
                      <span className="px-2">Article</span>
                    </div>
                  </button>
                  <p className="text-xl font-bold">
                    Aaron Finch joins Kolkata Knight Riders as a replacement for
                    Alex Hales
                  </p>
                  <span className="text-xs font-bold">11 March 2022</span>
                </div>
              </div>
              <div className="w-[1047px]">
                <img
                  src={Slide4}
                  alt="slide4.jpg"
                  className="w-full h-[528px]"
                />
                <div className="text-white w-full  text-left  mt-[-150px] p-5">
                  <button className="bg-red-500 font-bold text-sm rounded-md w-20 h-8 hover:bg-white hover:text-red-500  ">
                    <div className="w-20 h-8 flex  justify-center items-center ">
                      <span>
                        <CgNotes />
                      </span>
                      <span className="px-2">Article</span>
                    </div>
                  </button>
                  <p className="text-xl font-bold">
                    Key decisions taken in IPL Governing Council meeting
                    regarding TATA IPL 2022 Season
                  </p>
                  <span className="text-xs font-bold">25 Feb 2022</span>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="basis-2/5 m-4">
            <table className="w-full h-[630px] bg-blue-900">
              <thead>
                <tr className="w-full text-center bg-red-600 h-10">
                  <th className="text-white uppercase font-bold">Standings</th>
                </tr>
              </thead>
              <thead className="w-full">
                <tr className="w-full flex text-xs pt-2 text-white font-bold uppercase">
                  <th className="basis-1/4">Team</th>
                  <th className="basis-1/4 flex justify-center">PLD</th>
                  <th className="basis-1/4 flex justify-center">NET RR</th>
                  <th className="basis-1/4 flex justify-start">PTS</th>
                </tr>
              </thead>
              <tbody className="w-full p-5">{mapData}</tbody>
              <tr
                className="text-center 
              h-10 from-blue-500"
              >
                <td className="text-white uppercase font-bold">TWEET</td>
              </tr>
            </table>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default CarouselSlider;
