import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../../features/products/productsApi";
import { useTitle } from "../../../../hooks/useTitle";
import { currencyFormatter } from "../../../../utilites/currencyFormatter";
import TableData from "../../../Table/TableData";
import TableHeader from "../../../Table/TableHeader";
import { TableLinkData } from "../../../Table/TableLinkData";
import Error from "../../../ui/Error";

const ProductsTable = () => {
  //page title
  useTitle("All products");

  const [deleteProduct, { data: resProduct }] = useDeleteProductMutation();

  //delete product;
  const handleDelete = (pid) => {
    console.log(pid);
    deleteProduct(pid);
  };

  // toast message
  useEffect(() => {
    if (resProduct?._id) {
      toast.info("product delect successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (resProduct?.message) {
      toast.error(`${resProduct?.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [resProduct]);

  //get all product
  const { data: products, isError, isLoading } = useGetProductsQuery();

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
              <TableHeader title="Title" col={2} />
              <TableHeader title="category" />
              <TableHeader title="Brand" />
              <TableHeader title="price" />
              <TableHeader title="Update" />
              <TableHeader title="Delete" />
              <TableHeader title="Date" />
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr
                  key={product._id}
                  className="text-xs odd:bg-blue-100 even:bg-gray-100"
                >
                  <TableData data={1 + i} />

                  <TableData data={product?.title} col={2} />

                  <TableData data={product?.categoryId?.name} />

                  <TableData data={product?.brandId?.name} />

                  <TableData data={currencyFormatter(product?.price)} />

                  <TableLinkData
                    data={<FaRegEdit className="" />}
                    link={`/dashboard/update-product/${product?._id}`}
                  />

                  <td
                    onClick={() => handleDelete(product?._id)}
                    className="text-rose-500 px-5 text-2xl hover:text-rose-400  py-2 font-sans cursor-pointer duration-500"
                  >
                    <MdDeleteForever />
                  </td>
                  <TableData
                    data={new Date(product?.createdAt).toLocaleDateString()}
                  />
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
