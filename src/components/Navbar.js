import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { useState } from "react";
// import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-20 border-b border-gray flex items-center bg-white/90 backdrop-blur-lg fixed z-50 top-0 right-0 left-0 ">
      <nav className="wrapper flex justify-between items-center">
        {/* nav logo */}
        <h2 className="logo">
          <Link className="text-2xl font-semibold" to="/">
            Sh<span className="text-blue-500 text-3xl">o</span>p Tro
            <span className="text-blue-500 text-3xl">n</span>ics
          </Link>
        </h2>

        {/* nav middle */}
        <div className="hidden sm:block">
          <div className="flex gap-5 font-light">
            <Link to="/" className="link-item ">
              Home
            </Link>
            <Link to="/products" className="link-item ">
              Products
            </Link>
            <Link to="/about" className="link-item ">
              About
            </Link>
            <Link to="/contact" className="link-item ">
              Contact
            </Link>
          </div>
        </div>

        {/* nav right */}
        <div className="hidden sm:block">
          <div className="flex gap-5 justify-center items-center">
            <Link
              className=" text-xl flex justify-center items-center gap-1"
              to="/cart"
            >
              <AiOutlineShoppingCart /> Cart
            </Link>

            <Link
              to="/sign-in"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* open and close button */}
        <div
          className="md:hidden text-3xl z-[99] cursor-pointer duration-700"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <span>
              <AiOutlineClose />
            </span>
          ) : (
            <span>
              <AiOutlineMenu />
            </span>
          )}
        </div>
      </nav>

      {/*mobile navbar*/}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`md:hidden  absolute w-full h-[23rem] bottom-0 left-0 right-0 top-[5rem] pl-8 duration-500 bg-indigo-400  py-10  z-[20] shadow-md  shadow-indigo-300/80 ${
          open ? "left-0" : "left-[-120%]"
        }`}
      >
        <div className="flex flex-col gap-5 z-30">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link
            className=" text-xl flex justify-start items-center gap-1"
            to="/cart"
          >
            <AiOutlineShoppingCart /> Cart
          </Link>
          <Link
            to="/"
            className="self-start text-indigo-600/90 bg-indigo-100 text-md  px-5 py-3 rounded-xl font text-xl  hover:bg-indigo-100/80 hover:shadow-md hover:shadow-white/40 duration-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
