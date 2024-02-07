import React from "react";
import { useTitle } from "../../hooks/useTitle";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/products/productsApi";
import Error from "../../components/ui/Error";
import OrderSummary from "../../components/Orders/OrderSummary";
import TextInput from "../../components/ui/TextInput";

const Checkout = () => {
  //page title
  useTitle("Chceckout");

  const { id } = useParams();
  const { data: product, isError, isLoading } = useGetSingleProductQuery(id);
  console.log(product);

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
          <div className='flex flex-col gap-3'>
            <h2 className="text-2xl font-medium ">Shipping Details:</h2>
            <form
              // onSubmit={onSubmit}
              className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
            >
              <div>
                <TextInput
                  type="text"
                  title="First Name"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <TextInput
                  type="text"
                  title="Last Name"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <TextInput
                  type="text"
                  title="Address"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <TextInput
                  type="text"
                  title="City"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    // value={formData.country}
                    // onChange={onChange}
                    className="block w-full rounded-md border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="USA">United States</option>
                    <option value="CAN">Canada</option>
                    <option value="MEX">Mexico</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                </div>
              </div>

              <div>
                <TextInput
                  type="text"
                  title="State / Province"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <TextInput
                  type="text"
                  title=" Postal code"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <TextInput
                  type="text"
                  title="Phone Number"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                {" "}
                <button
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
