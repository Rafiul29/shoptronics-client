import { useGetProductsQuery } from "../../../../features/products/productsApi";

const AllProducts = () => {
  const { data: products } = useGetProductsQuery();
  console.log(products);
  return (
    <div className="section-padding mt-20">
      <div className="wrapper">
        hbh
      </div>
    </div>
  );
};

export default AllProducts;
