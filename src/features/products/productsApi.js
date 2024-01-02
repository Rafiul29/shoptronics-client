import axios from "../../utilites/axios"

export const getProducts=async()=>{
  const response=await axios.get('/products/private');

  return response.data;
}