import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useGetProductsQuery } from "../../../../features/products/productsApi";
import { useTitle } from "../../../../hooks/useTitle";
import { currencyFormatter } from "../../../../utilites/currencyFormatter";
import TableData from "../../../Table/TableData";
import TableHeader from "../../../Table/TableHeader";
import { TableLinkData } from "../../../Table/TableLinkData";
import Error from "../../../ui/Error";

const ProductsTable = () => {
  //page title
  useTitle("All products");
  const { data: products, isError, isLoading } = useGetProductsQuery();

  console.log(products);
  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && products?.length === 0) {
    content = <Error message="product not found" />;
  }
  if (!isLoading && !isError && products?.length > 0) {
    content = (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-md text-left rtl:text-right text-gray-700 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Title" />
              <TableHeader title="category" />
              <TableHeader title="Brand" />
              <TableHeader title="price" />
              <TableHeader title="Update" />
              <TableHeader title="Delete" />
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr
                  key={product._id}
                  className="text-xs bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                  <TableData data={1 + i} />

                  <TableData data={product?.title} />

                  <TableData data={product?.categoryId?.name} />

                  <TableData data={product?.brandId?.name} />

                  <TableData data={currencyFormatter(product?.price)} />

                  <TableLinkData
                    data={<FaRegEdit className="" />}
                    link={`/dashboard/update-product/${product?._id}`}
                  />

                  <td
                    // onClick={() => handleDelete(course._id)}
                    className="text-red-400 px-5 text-2xl py-2 font-sans cursor-pointer"
                  >
                    <MdDeleteForever />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <>{content}</>;
};

export default ProductsTable;
