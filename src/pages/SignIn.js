import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

const SignIn = () => {

  const [show,setShow]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

 
  return (
    <section className="section-padding mt-20 h-[calc(100vh-9rem)]">
      <div className="flex justify-center items-center h-full px-5 md:px-0">
        <div className="bg-white md:border border-1/2 md:p-8  p-3 md:rounded-xl md:shadow-xl md:max-w-md w-full ">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center md:mb-2 mt-5 md:mt-0">Sign In</h2>

            {/* email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className=" text-gray-700 text-md font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className=" text-gray-700 text-md font-bold"
              >
                Password
              </label>
              <input
                type={`${show? "text":"password"}`}
                id="password"
                name="password"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 "
                placeholder="Enter your password"
              />
              <FaEye
              onClick={()=>setShow(!show)}
              className="absolute right-5 top-10 cursor-pointer" />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Sign In
            </button>
            <p className="flex gap-2">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-blue-500 font-medium hover:underline"
              >
                sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
