import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
  const {pid}=useParams();
  console.log(pid)
  return (
    <div>UpdateProduct</div>
  )
}

export default UpdateProduct