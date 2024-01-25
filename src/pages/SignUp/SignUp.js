import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useRegisterMutation } from "../../features/auth/authApi";
import Error from "../../components/ui/Error";

const SignUp = () => {
  // title
  useTitle("Sign Up");
  const [show, setShow] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError?.data);
    }

    if (data?.token && data?.user) {
      navigate("/");
    }
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    register({
      fullname,
      email,
      password,
      phone,
    });
    // setFullname("");
    // setEmail("");
    // setPassword("");
    // setPhone("");
  };

  return (
    <section className="section-padding md:mt-28 mt-10 md:h-[calc(100vh-9rem)]">
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
                Full Name
              </label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                id="name"
                name="name"
                value={fullname}
                required
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                name="email"
                required
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={`${show ? "text" : "password"}`}
                id="password"
                name="password"
                required
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 "
                placeholder="Enter your password"
              />
              {show && (
                <FaEye
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-10 cursor-pointer"
                />
              )}
              {!show && (
                <FaEyeSlash
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-10 cursor-pointer"
                />
              )}
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
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="accept-terms"
                  name="agreed"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={agreed}
                  required
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Agreed with the terms and condition
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              disabled={isLoading}
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
            {error !== "" && <Error message={error.message} />}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
