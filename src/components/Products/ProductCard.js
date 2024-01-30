import { currencyFormatter } from "../../utilites/currencyFormatter";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product flex flex-col gap-2 bg-white/90 shadow-md rounded-xl overflow-hidden hover:shadow-2xl duration-500">
      <div className="img group w-full h-62 overflow-hidden">
        <img
          src={product.image_link}
          alt={product.title}
          className="w-full h-full object-cover border-none group-hover:scale-105 group-hover:brightness-100 eq bg-red-50"
        />
      </div>
      <div className="texts flex flex-col gap-2 px-4 pb-5">
        <span className="catagory-tag text-xl uppercase  font-semibold tracking-widest text-teal-500">
          {product.categoryId.name}
        </span>
        <h3 className="title text-md font-medium h-[3.5rem] overflow-hidden ">
          {product.title}
        </h3>
        <p className="details text-sm text-gray-500 h-[4.8rem] overflow-hidden ">
          {product.description}
        </p>
        <div className="flex justify-between items-center font-medium">
          <span className="price text-xl text-rose-500 ">
            {currencyFormatter(product.price)}
          </span>
          <Link
            to={`/product/${product._id}`}
            className="self-start bg uppercase cursor-pointer bg-blue-500 text-blue-50 font-normal py-2 px-5 rounded-md hover:text-violet-50 duration-500 shadow-md shadow-blue-300 hover:shadow-blue-400"
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
