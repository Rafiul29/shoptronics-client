import { FaPlus } from "react-icons/fa";

import { useTitle } from "../../../../hooks/useTitle";
import { Link } from "react-router-dom";
import TableTitle from "../../../Table/TableTitle";
import ProductsTable from "./ProductsTable";

const AllProducts = () => {
  //page title
  useTitle("All products");
  return (
    <section className="section-padding mt-10">
      <div className="wrapper">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between  ">
            <TableTitle text="All Products" />
            <Link
              to="/dashboard/add-product"
              className=" flex justify-center items-center gap-1 text-sm bg-blue-500 text-white font-medium py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 duration-500 "
            >
              <span>
                <FaPlus />
              </span>
              <span> Add Courses</span>
            </Link>
          </div>
          <ProductsTable />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
