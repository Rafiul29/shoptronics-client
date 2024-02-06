import { useTitle } from "../../hooks/useTitle.js";
import { useGetProductsQuery } from "../../features/products/productsApi.js";
import Error from "../ui/Error.js";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import ProductCard from "./ProductCard.js";
import { useState } from "react";
import FilterProducts from "./FilterProducts.js";

const Products = () => {
  // title
  useTitle("Products");
  const [title,setTitle]=useState("");
  let setUrl = "";
  if(title){
    setUrl = `?title=${title}`;
  }

  const { data: products, isError, isLoading } = useGetProductsQuery(setUrl);

 
  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && products?.length === 0) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && products?.length > 0) {
    content =
      products &&
      products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ));
  }

  return (
    <section className="section-padding mt-20">
      <div className="wrapper">
        <SectionTitle title={"Browse all Products"} />
        {/* <FilterProducts/> */}
        {/* <div className="mb-10 border ">
          {" "}
          <input
          onChange={(e)=>setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="search product"
          />
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {content}
        </div>
      </div>
    </section>
  );
};

export default Products;
