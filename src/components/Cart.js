import { currencyFormatter } from "../utilites/currencyFormatter";
import Button from "./Button";

const Cart = ({ product }) => {
  console.log(product);
  return (
    <div className="product flex flex-col  gap-2 bg-gray-200 rounded-md overflow-hidden  shadow-md hover:shadow-xl duration-300 hover:md:scale-105">
      <div className="img w-full h-64 overflow-hidden bg-red-200">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="product_detail p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold truncate">{product.name}</h3>
        <p className="font-semibold text-xl">{currencyFormatter(product.price)}</p>
       <div className="self-start">
       <Button text={"View Details"} className="self-start"/>
       </div>
      </div>
      
    </div>
  );
};

export default Cart;
