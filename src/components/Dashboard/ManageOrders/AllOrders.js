
import { useTitle } from "../../../hooks/useTitle";
import TableTitle from "../../Table/TableTitle";
import OrdersTable from "./OrdersTable";

const AllOrders = () => {
  useTitle("All orders");

  
  return (
    <section className="section-padding mt-10">
    <div className="wrapper">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between  ">
          <TableTitle text="All Orders" />
        </div>
        <OrdersTable />
      </div>
    </div>
  </section>
  )
}

export default AllOrders