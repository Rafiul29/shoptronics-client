import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex section-padding bg-gray-200 shadow-xl shadow-gray-300  ">
      {/* dashboard side bar */}
      <div className="w-full mt-10 min-h-screen  text-md">
        <ul className="menu px-4 py-2 flex flex-col gap-4">
          <li className="bg-gray-300 px-4 py-2 rounded-xl  hover:bg-gray-400 hover:text-gray-200 duration-700 ">
            <NavLink to="/" className="flex justify-start items-center gap-2">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          {/* <li className="bg-gray-300 px-4 py-2 rounded-xl  hover:bg-gray-400  hover:text-gray-200 duration-700 ">
            <NavLink to="/" className="flex justify-start items-center gap-2">
              <FaRegUser></FaRegUser>
              Users
            </NavLink>
          </li> */}
          <li className="bg-gray-300 px-4 py-2 rounded-xl  hover:bg-gray-400  hover:text-gray-200 duration-700 ">
            <NavLink to="/dashboard/manage-products" className="flex justify-start items-center gap-2">
              <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
              Products
            </NavLink>
          </li>

          <li className="bg-gray-300 px-4 py-2 rounded-xl  hover:bg-gray-400  hover:text-gray-200 duration-700 ">
            <NavLink to="/dashboard/manage-categories" className="flex justify-start items-center gap-2">
              <BiCategory></BiCategory>
              Categories
            </NavLink>
          </li>
          <li className="bg-gray-300 px-4 py-2 rounded-xl  hover:bg-gray-400  hover:text-gray-200 duration-700 ">
            <NavLink to="/dashboard/manage-brands" className="flex justify-start items-center gap-2">
              <SiBrandfolder></SiBrandfolder>
              Brands
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
