import { currencyFormatter } from "../utilites/currencyFormatter";
import Button from "./Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Card = ({ product }) => {
  return (
    <div className="product flex flex-col gap-5 bg-gray-200 rounded-md overflow-hidden  shadow-md hover:shadow-xl duration-300 ">
      <div className="img group w-full h-64 overflow-hidden ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-100 eq"
        />
      </div>

      <div className="product_detail p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold truncate">{product.name}</h3>

        <Rating value={product.rating} text={`${product.numReviews}`} />

      <div className="flex justify-between items-center " >
      <p className="font-semibold text-xl">
          {currencyFormatter(product.price)}
        </p>

        <Link to={`/product/${product._id}`} className="self-start ">
          <Button text={"View Details"} className="self-start" />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Card;
