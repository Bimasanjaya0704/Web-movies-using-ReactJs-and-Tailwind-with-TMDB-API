import React, { useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);


  return (
    <nav className="w-full bg-dark shadow">
      <div className="px-4">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="flex text-xl font-bold md:text-3xl text-primary ">
                  <RiMovie2Fill className=" mt-1 mr-1" />
                  BIMovies
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-primary rounded-md outline-none focus:border-primary focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex justify-center text-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-normal xl:text-lg">
                <li className="text-light hover:text-primary ">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-light hover:text-primary ">
                  <Link to="/nowplaying">Now Playing</Link>
                </li>
                <li className="text-light hover:text-primary ">
                  <Link to="/upcoming">Upcoming</Link>
                </li>
                <li className="text-light hover:text-primary ">
                  <Link to="/popular">Popular</Link>
                </li>
                <li className="text-light hover:text-primary ">
                  <Link to="/toprated">Top Rated</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar ;