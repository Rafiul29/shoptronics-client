import OrderCardItem from "../../components/Orders/OrderCardItem";
import Error from "../../components/ui/Error";
import Loader from "../../components/ui/Loaders/Loader";
import { useGetAllOrdersUserQuery } from "../../features/orders/ordersApi";

const Orders = () => {
  const { data: userOrders, isLoading, isError } = useGetAllOrdersUserQuery();

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
    content = <Error message="order not found" />;
  }
  if (!isLoading && !isError && userOrders?.length === 0) {
    content = <Error message="order not found" />;
  }
  if (!isLoading && !isError && userOrders?.length > 0) {
    content =
      userOrders &&
      userOrders?.map((order) => (
        <OrderCardItem key={order._id} order={order} />
      ));
  }
  return (
    <section className="section-padding mt-20 min-h-[calc(90vh-3rem)]">
      <div className="wrapper">
        <div className="space-y-5">
        {content}
        </div>
      </div>
    </section>
  );
};

export default Orders;
