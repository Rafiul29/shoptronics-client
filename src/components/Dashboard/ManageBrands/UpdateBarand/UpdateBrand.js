import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../../ui/Error";
import { useGetSigleBrandQuery } from "../../../../features/brands/brandsApi";
import Form from "./Form";

const UpdateBrand = () => {
  const { bid } = useParams();
  const { data: brand, isLoading, isError } = useGetSigleBrandQuery(bid);
  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="brand not found" />;
  }
  if (!isLoading && !isError && !brand?._id) {
    content = <Error message="brand not found" />;
  }

  if (!isLoading && !isError && brand?._id) {
    content = <Form brand={brand} />;
  }

  return (
    <section className="section-padding mt-20">
      <div className="wrapper">
        <div className="px-4 sm:px-0 pb-2">
          <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
            Update Brand
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Please fillup the form to update brand
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{content}</div>
      </div>
    </section>
  );
};

export default UpdateBrand;
