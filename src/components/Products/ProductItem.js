import { Link, useParams } from "react-router-dom";
import { currencyFormatter } from "../../utilites/currencyFormatter";
import Rating from "../Rating";
import Button from "../Button";
import { useTitle } from "../../hooks/useTitle";
import { useGetSingleProductQuery } from "../../features/products/productsApi";
import Error from "../ui/Error";

const ProductItem = () => {
  const { pid } = useParams();

  const { data: product, isError, isLoading } = useGetSingleProductQuery(pid);

  useTitle(`${product?.title} - Product`);

  // decide what to render
  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div className="text-center">Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && !product?._id) {
    content = <Error message="product not found" />;
  }

  if (!isLoading && !isError && product?._id) {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div className="md:w-[42rem] md:h-[34rem] overflow-hidden border-2 rounded-lg p-10">
          <img
            src={product?.image_link}
            alt={product?.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" flex flex-col gap-4 p-5">
          <h2 className="text-xl font-medium ">{product?.title}</h2>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-medium  "> Quick Overview :</span>
            <div>
              {product?.description.split(",").map((d, i) => (
                <ul className="pl-5" key={i}>
                  <li className="list-disc font-light">{d}</li>
                </ul>
              ))}
            </div>
          </div>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Brand</span>{" "}
            <span className="font-medium">{product?.brandId?.name}</span>
          </h3>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Category</span>{" "}
            <span className="font-medium">{product?.categoryId?.name}</span>
          </h3>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Price:</span>{" "}
            <span className="font-semibold">
              {currencyFormatter(product?.price)}
            </span>
          </h3>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Status:</span>{" "}
            <span className="font-semibold">
              {product?.totalQty > 0 ? (
                <span className="text-blue-600">In Stock</span>
              ) : (
                <span className="text-rose-600 px-3 py-2 rounded-md">
                  Out of Stock
                </span>
              )}
            </span>
          </h3>
          <div className="mt-5">
           <Link to={`/checkout/${product._id}`} className="bg-blue-500 text-white  py-2 px-16 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 duration-500">Buy Now</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding">
      <main className="wrapper ">{content}</main>
    </section>
  );
};

export default ProductItem;
