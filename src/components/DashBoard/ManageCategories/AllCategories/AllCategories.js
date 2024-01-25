import React from "react";
import { useGetAllCategoriesQuery } from "../../../../features/categories/categoriesApi";

const AllCategories = () => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();
  console.log(data);
  return (
    <section className="section-padding mt-20">
      <div className="wrapper">
        sdds
      </div>
    </section>
  );
};

export default AllCategories;
