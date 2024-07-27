// src/Signup.js
import React from 'react';
import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <div className="font-sans">
      <div className="relative min-h-screen rounded-3xl px-6  py-4 flex flex-col sm:justify-center items-center bg-gradient-to-tr from-purple-400 to-cyan-300">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-green-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-yellow-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md">
            <label className="block mt-3 text-lg  text-gray-700 text-center font-bold">
              Signup
            </label>
            <form method="#" action="#" className="mt-10">
              <div>
                <input
                  type="text"
                  placeholder=" Full Name"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="email"
                  placeholder=" Email address"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder=" Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder=" Confirm Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button className="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Sign Up
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Already have an account?</label>
                  <button
                    className="bg-cyan-500 text-white w-19 rounded-xl px-3 shadow-xl transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    <Link to="/Signin">
                    Sign In
                    </Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
