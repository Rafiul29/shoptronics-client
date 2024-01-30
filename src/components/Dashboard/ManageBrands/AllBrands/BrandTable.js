import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import TableData from "../../../Table/TableData";
import TableHeader from "../../../Table/TableHeader";
import { TableLinkData } from "../../../Table/TableLinkData";
import Error from "../../../ui/Error";
import { useDeleteBrandMutation, useGetAllBrandsQuery } from "../../../../features/brands/brandsApi";

const BrandTable = () => {

  const [deleteBrand, { data: resBrand }] = useDeleteBrandMutation();
  //delete product;
  const handleDelete = (bid) => {
    deleteBrand(bid);
  };

  // toast message
  useEffect(() => {
    if (resBrand?._id) {
      toast.info("brand delect successfully", {
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
    if (resBrand?.message) {
      toast.error(`${resBrand?.message}`, {
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
  }, [resBrand]);

  //get all categories
  const {data:barands,isLoading,isError}=useGetAllBrandsQuery();

  //decide what to do render;
  let content = null;
  if (isLoading) {
    content = <div>Loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="brand not found" />;
  }
  if (!isLoading && !isError && barands?.length === 0) {
    content = <Error message="brand not found" />;
  }
  if (!isLoading && !isError && barands?.length > 0) {
    content = (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-md text-left rtl:text-right text-gray-700 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Name" col={2} />
              <TableHeader title="No. Products" />
              <TableHeader title="Update" />
              <TableHeader title="Delete" />
              <TableHeader title="Date" />
            </tr>
          </thead>
          <tbody>
            {barands &&
              barands?.map((barand, i) => (
                <tr
                  key={barand._id}
                  className="text-xs odd:bg-blue-100 even:bg-gray-100"
                >
                  <TableData data={1 + i} />
                  <TableData data={barand?.name} col={2} />
                  <TableData data={barand?.products.length} />
                  <TableLinkData
                    data={<FaRegEdit className="" />}
                    link={`/dashboard/update-brand/${barand?._id}`}
                  />

                  <td
                    onClick={() => handleDelete(barand?._id)}
                    className="text-rose-500 px-5 text-2xl hover:text-rose-400  py-2 font-sans cursor-pointer duration-500"
                  >
                    <MdDeleteForever />
                  </td>
                  <TableData
                    data={new Date(barand?.createdAt).toLocaleDateString()}
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

export default BrandTable;
