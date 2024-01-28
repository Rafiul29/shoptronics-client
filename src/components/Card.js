import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilites/currencyFormatter";
import Button from "./Button";
import Rating from "./Rating";

const Card = ({ product }) => {
  return (
    // bg-white md:border border-1/2 md:p-8  p-3 md:rounded-xl md:shadow-xl
    // flex flex-col gap-5 bg-blue-50 rounded-md overflow-hidden  shadow-md hover:shadow-xl duration-300
    <div className="product flex flex-col gap-1 bg-white/90 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl duration-500 ">
      <div className="img group w-full h-48  overflow-hidden ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover border-none group-hover:scale-105 group-hover:brightness-100 eq bg-red-50"
        />
      </div>

      <div className="product_detail p-4 flex flex-col gap-1">
        <h3 className="text-xl font-semibold truncate">{product.name}</h3>

        <Rating value={product.rating} text={`${product.numReviews}`} />

      <div className="flex justify-between items-center " >
      <p className="font-semibold text-xl">
          {currencyFormatter(product.price)}
        </p>

        <Link to={`/product/${product._id}`} className="self-start ">
          <Button text={"view"} className="self-start" />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Card;
