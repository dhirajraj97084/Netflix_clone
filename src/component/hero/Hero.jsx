import React from "react";
import Navbar from "../navbar/Navbar";

function Hero() {
  return (
    <div>
      <div className="div">
        <div
          style={{
            background:
              "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
          }}
          className="bg lg:h-[44.5em] md:h-[44em] h-[30em]"
        >
          <Navbar />
          {/* herosectiob */}
          <div className="hero flex justify-center items-center h-[25em] md:h-[35em] lg:h-[35em] ">
            <div className="innerhero  ">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl text-center mb-3 font-bold lg:w-[20em] md:w-[16em] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                velit provident fugiat.
              </h1>
              <p className="text-white text-xl font-semibold mb-2 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti
              </p>
              <p className=" text-white text-center ">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="main flex flex-wrap gap-2 px-5 py-4 justify-center  ">
                <input
                  placeholder="type your Email"
                  type="text"
                  className="opacity-80 border-2 border-gray-600 outline-none text-white hover:ring-1 hover:ring-gray-600  bg-gray-400 placeholder-gray-700 py-2 px-3 md:w-96 lg:w-96 w-full rounded-md"
                />
                <button className="bg-red-700 flex items-center px-6 py-2 gap-2 text-xl rounded-md">
                  <p className="text-white font-semibold">get started</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
}

export default Hero;
