import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card.js";
import products from "../data/products";
import { useTitle } from "../hooks/useTitle.js";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productsSlice.js";

const Products = () => {

  const dispatch = useDispatch();

  const {products,isLoading,isError,error}=useSelector((state)=>state.products)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // title
  useTitle("Product");

  return (
    <section className="section-padding mt-20">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
