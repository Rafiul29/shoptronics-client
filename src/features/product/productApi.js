import axios from "../../utilites/axios"

export const getProduct=async(id)=>{
  const response=await axios.get(`/products/private/${id}`);

  return response.data;
}