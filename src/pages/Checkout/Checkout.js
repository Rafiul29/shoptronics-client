import React, { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/products/productsApi";
import Error from "../../components/ui/Error";
import OrderSummary from "../../components/Orders/OrderSummary";
import TextInput from "../../components/ui/TextInput";
import { useCreateOrderMutation } from "../../features/orders/ordersApi";

const Checkout = () => {
  //page title
  useTitle("Chceckout");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { id } = useParams();
  const { data: product, isError, isLoading } = useGetSingleProductQuery(id);

  const [createOrder, { data:resUrl ,isLoading:orderLoading }] = useCreateOrderMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder({
      firstName,
      lastName,
      address,
      city,
      phoneNumber,
      product,
    });
  };

  useEffect(()=>{
    if(resUrl?.url){
      window.location.href=resUrl.url;
    }
  },[resUrl?.url])
  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="category not found" />;
  }
  if (!isLoading && !isError && !product?._id) {
    content = <Error message="category not found" />;
  }
  if (!isLoading && !isError && product?._id) {
    content = <OrderSummary product={product} />;
  }

  return (
    <div className="section-padding mt-20 min-h-[calc(100vh-9rem)]">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-medium ">Shipping Details:</h2>
            <form
              onSubmit={handleSubmit}
              className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
            >
              <div>
                <TextInput
                  type="text"
                  title="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <TextInput
                  type="text"
                  title="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <TextInput
                  type="text"
                  title="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div>
                <TextInput
                  type="text"
                  title="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div>
                <TextInput
                  type="text"
                  title="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                {" "}
                <button
                disabled={orderLoading}
                  type="submit"
                  className="w-full bg-blue-500 rounded-lg text-white py-3 hover:bg-blue-700 duration-300 uppercase"
                >
                  Proceed to checkout
                </button>
              </div>
            </form>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
