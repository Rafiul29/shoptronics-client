import React from "react";
import { currencyFormatter } from "../../utilites/currencyFormatter";

const OrderSummary = ({ product }) => {
  const { _id, title, price, image_link } = product;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-medium md:mb-10">Order Summary</h2>
      <div className="flex flex-col gap-2 w-full border rounded-md overflow-hidden p-5">
        <h2 className="font-semibold flex justify-between items-center p-2">
          <span>Product Code :</span>{" "}
          <span className="text-blue-600"> {_id}</span>
        </h2>
        <hr />
        <div className="h-32 flex justify-between items-center gap-5">
          <div className="col-span-2  h-32  w-40 overflow-hidden">
            <img
              src={image_link}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="col-span-3">{title}</h3>
        </div>
        <hr />
        <h2 className="font-semibold flex justify-between items-center p-2">
          <span>Total Price:</span>{" "}
          <span className="text-rose-500">{currencyFormatter(price)}</span>
        </h2>
      </div>
    </div>
  );
};

export default OrderSummary;
