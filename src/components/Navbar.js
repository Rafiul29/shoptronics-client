import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="w-full h-20 border-b border-gray flex items-center bg-white/90 backdrop-blur-lg fixed z-50 top-0 right-0 left-0 ">
      <nav className="wrapper flex justify-between items-center">

        {/* nav logo */}
        <h2 className="logo">
          <Link className="text-2xl font-semibold" to="/">Sh<span className="text-indigo-500 text-3xl">o</span>p Tronics</Link>
        </h2>

        {/* nav middle */}
        <div className="hidden sm:block">
          <div className="flex gap-5 font-light">
            <Link to="/" className="link-item ">Home</Link>
            <Link to="/products" className="link-item ">Products</Link>
            <Link to="/about" className="link-item ">About</Link>
            <Link to="/contact" className="link-item ">Contact</Link>
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
              to="/"
              className=" bg-black/90 text-white  px-5 py-3 rounded-xl font text-xl  hover:bg-black/75 hover:shadow-md hover:shadow-black/40duration-700"
            >
              Sign In
            </Link>
          </div>
        </div>
        
      </nav>

    </header>
  );
};

export default Navbar;
