import React from "react";
import { currencyFormatter } from "../../utilites/currencyFormatter";

const OrderCardItem = ({ order }) => {
  console.log(order);
  const {
    firstName,
    lastName,
    city,
    phoneNumber,
    payment_status,
    product,
    shipping,
    subtotal,
    total,
    user,
    createdAt,
  } = order;
  return (
    <div className="flex md:flex-row flex-col border p-3 gap-3 justify-between md:items-center">
      <div className="flex items-center justify-center">
        <div className="h-32 w-32 hidden md:block">
          <img
            src={product.image_link}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="space-y-2">
          <p className="space-x-2">
            <span className="uppercase text-teal-600 font-semibold">
              {" "}
              Title:
            </span>
            <span>{product.title}</span>
          </p>
          <p className="space-x-2 ">
            <span className="uppercase text-teal-600 font-semibold">
              Email:
            </span>
            <span>{shipping?.email}</span>
          </p>
          <p className="space-x-2 ">
            <span className="uppercase text-teal-600 font-semibold">
              Phone Number:
            </span>
            <span>{phoneNumber}</span>
          </p>
        </h3>
      </div>

      <h3 className="space-y-2">
        <p className="space-x-2">
          <span className="uppercase text-teal-600 font-semibold">total:</span>
          <span>{currencyFormatter(total)}</span>
        </p>
        <p className="space-x-2">
          <span className="uppercase text-teal-600 font-semibold">Date:</span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </p>
      </h3>
    </div>
  );
};

export default OrderCardItem;
