import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section-padding mt-20 h-[calc(100vh-9rem)]">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white border border-1/2 p-8 rounded-xl shadow-xl max-w-md w-full  ">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center mb-3">Sign In</h2>

            {/* email */}
            <div className="flex flex-col gap-1">
              <label for="email" className=" text-gray-700 text-md font-bold">
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
            <div className="flex flex-col gap-1">
              <label
                for="password"
                className=" text-gray-700 text-md font-bold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
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
