import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleCategoryQuery } from '../../../../features/categories/categoriesApi';
import Error from '../../../ui/Error';
import Form from './Form';

const UpdateCategory = () => {
  const {cid}=useParams();
  const {data:category,isLoading,isError}=useGetSingleCategoryQuery(cid);
   //decide what to do render;
   let content = null;
   if (isLoading) {
     content = <div>Loading.....</div>;
   }
   if (!isLoading && isError) {
     content = <Error message="category not found" />;
   }
   if (!isLoading && !isError && !category?._id){
     content = <Error message="category not found" />;
   }
 
   if (!isLoading && !isError && category?._id){
     content =(
       <Form category={category} />
     )
   }
 
  return (
    <section className="section-padding mt-20">
    <div className="wrapper">
      <div className="px-4 sm:px-0 pb-2">
        <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
          Update product
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Please fillup the form to update product
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
       {content}
      </div>
    </div>
  </section>
  )
}

export default UpdateCategory