import React from 'react'
import { useGetAllBrandsQuery } from '../../../../features/brands/brandsApi';

const AllBarands = () => {

  const {data:barands,isLoading,isError}=useGetAllBrandsQuery();
  console.log({barands})
  return (
    <div className='mt-40'>AllBarands</div>
  )
}

export default AllBarands;