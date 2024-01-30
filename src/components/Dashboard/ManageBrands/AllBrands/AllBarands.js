import React from 'react'
import { useGetAllBrandsQuery } from '../../../../features/brands/brandsApi';
import { useTitle } from '../../../../hooks/useTitle';
import TableTitle from '../../../Table/TableTitle';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import BrandTable from './BrandTable';

const AllBarands = () => {

  
  // page title
  useTitle("All Brands");

  return (
    <section className="section-padding mt-10">
      <div className="wrapper">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between  ">
            <TableTitle text="All Brands" />
            <Link
              to="/dashboard/add-brand"
              className=" flex justify-center items-center gap-1 text-sm bg-blue-500 text-white font-medium py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 duration-500 "
            >
              <span>
                <FaPlus />
              </span>
              <span> add brand</span>
            </Link>
          </div>
        
          <BrandTable/>
        </div>
      </div>
    </section>
  )
}

export default AllBarands;