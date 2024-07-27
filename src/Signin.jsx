// src/Signin.js
import React from 'react';
import {Link} from "react-router-dom";
const Signin = () => {
  return (
    <div className="font-sans">
      <div className="relative min-h-screen rounded-3xl px-6  py-4 flex flex-col sm:justify-center items-center bg-gradient-to-tr from-fuchsia-300 to-violet-700">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gradient-to-tr from-rose-200 to-teal-200 shadow-md">
            <label className="block mt-3 text-lg text-gray-700 text-center font-bold">
              Signin
            </label>
            <form method="#" action="#" className="mt-10">
              <div>
                <input
                  type="email"
                  placeholder=" Email address"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder=" Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7 flex">
                <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="remember"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>

                <div className="w-full text-right">
                  <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Signin
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">Or sign in with</label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"><Link to="https://www.facebook.com/login/">
                  Facebook
                  </Link>
                </button>

                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"><Link to="https://accounts.google.com/v3/signin/identifier?ifkv=AdF4I771NTFdRhPH1DmsCiLFU-2cd_DLijJUqajBLagJp9_37R_m5nSPh9lBCxGBZBsp05hjay63tA&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1477088799%3A1721971511934520&ddm=0">
                  Google
                  </Link>
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">New here?</label>
                  <a href="#" className="text-blue-500 font-bold transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"><button className="text-blue-500underline">< Link to="/Signup">Create an account</Link></button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default Signin;