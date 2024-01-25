import React from 'react'
import { useTitle } from '../../hooks/useTitle';

const NotFound = () => {
     // title
     useTitle("Not Found")
  return (
    <div className='py-20'>NotFound</div>
  )
}

export default NotFound;