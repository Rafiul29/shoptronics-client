import React from "react";
import {
  ordersApi,
  useGetAllOrdersQuery,
} from "../../../features/orders/ordersApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loaders/Loader";
import TableHeader from "../../Table/TableHeader";
import TableData from "../../Table/TableData";
import { currencyFormatter } from "../../../utilites/currencyFormatter";

const OrdersTable = () => {
  const { data: allOrders, isLoading, isError } = useGetAllOrdersQuery();
  console.log(allOrders);
  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && allOrders?.length === 0) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && allOrders?.length > 0) {
    content = (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-md text-left rtl:text-right text-gray-700 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Order Id" />
              <TableHeader title="Name" />
              <TableHeader title="Email" />
              <TableHeader title="Phone" />
              <TableHeader title="Address" />
              <TableHeader title="City" />
              <TableHeader title="Payment Status" />
              <TableHeader title="Delivery Status" />
           
              <TableHeader title="price" />
              <TableHeader title="Date" />
            </tr>
          </thead>
          <tbody>
            {allOrders &&
              allOrders?.map((order, i) => (
                <tr
                  key={order._id}
                  className="text-xs odd:bg-blue-100 even:bg-gray-100"
                >
                  <TableData data={1 + i} />
                  <TableData data={order?._id} />
                  <TableData data={order?.user.fullname} />

                  <TableData data={order.shipping.email} />
                  <TableData data={order.phoneNumber} />
                  <TableData data={order.address} />
                  <TableData data={order.city} />
                  <TableData data={order.payment_status} />
                  <TableData data={order.delivery_status} />
                  <TableData data={currencyFormatter(order.total)} />
                  <TableData data={new Date(order.createdAt).toLocaleDateString()} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <>{content}</>;
};

export default OrdersTable;
