import React from "react";
import { Link } from "react-router-dom";

// Home Page's main functional component:
export default function HomePage() {
  return (
    <div className="Page-Parent overflow-y-hidden flex flex-col h-screen w-screen place-content-center place-items-center bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
      <div className="CTA-SECTION flex flex-col gap-28 sm:gap-36">
        <h1 className="flex text-center text-7xl sm:text-8xl font-mono shadow-lg text-white pt-24 md:px-20">
          Welcome To The Blog Site!
        </h1>

        <div className="Buttons flex flex-row place-content-center gap-5 pb-40 px-20">
          <button
            className="flex-auto sm:flex-initial w-1/4 font-mono text-xl w-50 rounded shadow-md shadow-red-400 hover:shadow-red-600 p-4 bg-red-600 hover:bg-red-500 text-white hover:text-bg-red-500 hover:text-gray-800"
            onClick={() => {
              window.location.pathname = "signup";
            }}
          >
            Get Started
          </button>
          <button
            className="flex-auto sm:flex-initial w-1/4 font-mono text-xl w-50 rounded shadow-md shadow-red-400 hover:shadow-red-600 p-4 bg-red-600 hover:bg-red-500 text-white hover:text-bg-red-500 hover:text-gray-800"
            onClick={() => {
              window.location.pathname = "about";
            }}
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
}
