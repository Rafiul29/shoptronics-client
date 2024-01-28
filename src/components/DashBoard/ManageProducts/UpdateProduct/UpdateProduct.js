import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../../../features/products/productsApi';
import Form from './Form';
import Error from '../../../ui/Error';

const UpdateProduct = () => {
  const {pid}=useParams();
  const{data:product,isLoading,isError}=useGetSingleProductQuery(pid);

  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && !product?._id){
    content = <Error message="product not found" />;
  }

  if (!isLoading && !isError && product?._id){
    content =(
      <Form product={product} />
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

export default UpdateProduct