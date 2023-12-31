import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const SignUp = () => {

  // title
  useTitle("Sing Up")
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-padding mt-20 h-[calc(100vh-9rem)]">
      <div className="flex justify-center items-center h-full px-5 md:px-0">
        <div className="bg-white md:border border-1/2 md:p-8 p-3 md:rounded-xl md:shadow-xl md:max-w-md w-full ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:gap-4 gap-2"
          >
            <h2 className="text-3xl font-bold text-center md:mb-2 mt-5 md:mt-0">
              Sign Up
            </h2>
            {/* name */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className=" text-gray-700 text-md font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className=" text-gray-700 text-md font-bold"
              >
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
                type={`${show ? "text" : "password"}`}
                id="password"
                name="password"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 "
                placeholder="Enter your password"
              />
             {show &&  <FaEye
                onClick={() => setShow(!show)}
                className="absolute right-5 top-10 cursor-pointer"
              />}
             {
              !show &&  <FaEyeSlash  onClick={() => setShow(!show)} className="absolute right-5 top-10 cursor-pointer" />
             }
            </div>

            {/* phone */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className=" text-gray-700 text-md font-bold"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            {/* address */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="address"
                className="text-gray-700 text-md font-bold"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your address"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Sign Up
            </button>
            <p className="flex gap-2">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-blue-500 font-medium hover:underline "
              >
                sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
