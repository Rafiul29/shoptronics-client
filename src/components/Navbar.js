import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-gray flex items-center bg-white/80 backdrop-blur-lg  ">
      <div className="wrapper flex justify-between items-center">

        {/* nav logo */}
        <h2 className="text-2xl font-semibold">Shop Tronics</h2>

       {/* nav middle */}
        <div className="flex gap-5">
         <Link to="/">Home</Link>
          <Link to="/products">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* nav right */}
        <div className="flex gap-5 justify-center items-center">
        
            <Link
              className=" text-xl flex justify-center items-center gap-1"
              to="/cart"
            >
              <AiOutlineShoppingCart /> Cart
            </Link>
        
        
            <Link to="/"  
              className=" bg-black/90 text-white  px-5 py-3 rounded-xl font text-xl  hover:bg-black/75 hover:shadow-md hover:shadow-black/40duration-700"
            >
              Sign In
            </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
