import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTitle } from "../../../../hooks/useTitle";
import TableTitle from "../../../Table/TableTitle";
import CategoryTable from "./CategoryTable";

const AllCategories = () => {
  // page title
  useTitle("All category");

  return (
    <section className="section-padding mt-10">
      <div className="wrapper">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between  ">
            <TableTitle text="All Category" />
            <Link
              to="/dashboard/add-category"
              className=" flex justify-center items-center gap-1 text-sm bg-blue-500 text-white font-medium py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 duration-500 "
            >
              <span>
                <FaPlus />
              </span>
              <span> add category</span>
            </Link>
          </div>
          <CategoryTable />
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
