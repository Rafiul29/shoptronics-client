import { Link, useParams } from "react-router-dom";
import { currencyFormatter } from "../utilites/currencyFormatter";
import Rating from "./Rating";
import Button from "./Button";
import { useTitle } from "../hooks/useTitle";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductQuery } from "../features/products/productsApi";

const ProductItem = () => {

  const dispatch=useDispatch();
  const { pid} = useParams();

const {data:product,isError,isLoading,error,isSuccess}=useGetProductQuery(pid);
  
   useTitle(`Product-${product?.name}`)
   
  return (
    <section className="section-padding">
      <main className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div className="img h-100 overflow-hidden">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" flex flex-col gap-5 p-5">
          <h2 className="text-4xl font-semibold ">{product?.name}</h2>
          <p className="text-lg tracking-wider leading-7">
            {product?.description}
          </p>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Price:</span> <span className="font-semibold">{currencyFormatter(product?.price)}</span>
          </h3>
          <h3 className="flex flex-row gap-5 text-lg ">
            {" "}
            <span>Status:</span> <span className="font-semibold">{product?.countInStock>0?"In Stock":<span className="text-red-400">Out of Stock</span>}</span>
          </h3>
          <Rating value={product?.rating} reviewsNum={`${product?.numReviews}`}/>

         <div className=" text-center mt-5 font-bold">
         <Button text={"AddTo Cart"} />
         </div>
         <Link to="/products" className="inline-block">Go Back</Link>
        </div>
      </div>
      </main>
    </section>
  );
};

export default ProductItem;
