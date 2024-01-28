import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../../features/categories/categoriesApi";
import TableData from "../../../Table/TableData";
import TableHeader from "../../../Table/TableHeader";
import { TableLinkData } from "../../../Table/TableLinkData";
import Error from "../../../ui/Error";

const CategoryTable = () => {
  const [deleteCategory, { data: resCagtegory }] = useDeleteCategoryMutation();
  //delete product;
  const handleDelete = (cid) => {
    deleteCategory(cid);
  };

  // toast message
  useEffect(() => {
    if (resCagtegory?._id) {
      toast.info("category delect successfully", {
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
    if (resCagtegory?.message) {
      toast.error(`${resCagtegory?.message}`, {
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
  }, [resCagtegory]);

  //get all categories
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery();

  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="category not found" />;
  }
  if (!isLoading && !isError && categories?.length === 0) {
    content = <Error message="category not found" />;
  }
  if (!isLoading && !isError && categories?.length > 0) {
    content = (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-md text-left rtl:text-right text-gray-700 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Name" col={2} />
              <TableHeader title="Number of Product" />
              <TableHeader title="Update" />
              <TableHeader title="Delete" />
              <TableHeader title="Date" />
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories?.map((category, i) => (
                <tr
                  key={category._id}
                  className="text-xs odd:bg-blue-100 even:bg-gray-100"
                >
                  <TableData data={1 + i} />
                  <TableData data={category?.name} col={2} />
                  <TableData data={category?.products.length} />
                  <TableLinkData
                    data={<FaRegEdit className="" />}
                    link={`/dashboard/update-product/${category?._id}`}
                  />

                  <td
                    onClick={() => handleDelete(category?._id)}
                    className="text-rose-500 px-5 text-2xl hover:text-rose-400  py-2 font-sans cursor-pointer duration-500"
                  >
                    <MdDeleteForever />
                  </td>
                  <TableData
                    data={new Date(category?.createdAt).toLocaleDateString()}
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

export default CategoryTable;
