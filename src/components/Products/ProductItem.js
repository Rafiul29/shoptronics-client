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

  useTitle(`Product - ${product?.title}`);

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
        <div className="w-full h-[38rem]  overflow-hidden">
          <img
            src={product?.image_link}
            alt={product?.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" flex flex-col gap-4 p-5">
          <h2 className="text-2xl font-medium ">{product?.title}</h2>
          <p className="flex flex-col gap-4">
         <span className="text-xl font-semibold "> Quick Overview :</span>
            <span>
            {product?.description.split(",").map((d,i)=>(
              <ul className="pl-5" key={i}>
                <li className="list-disc font-light">{d}</li>
              </ul>
            ))}
            </span>
          </p>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Brand</span>{" "}
            <span className="font-semibold">{product?.brandId?.name}</span>
          </h3>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Category</span>{" "}
            <span className="font-semibold">{product?.categoryId?.name}</span>
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
          {/* <Rating
          value={product?.rating}
          reviewsNum={`${product?.numReviews}`}
          /> */}

          <div className="mt-5 flex flex-row  justify-around  items-center">
          <div className="text-center font-bold">
            <Button text={"Booking now"} />
          </div>
          <Link to="/products" className="bg-blue-500 py-2 px-3 rounded-md text-gray-50 font-medium">
            Go Back
          </Link>
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
