import { useEffect, useState } from "react";
import TextInput from "../../../ui/TextInput";
import { useUpdateCategoryMutation } from "../../../../features/categories/categoriesApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form = ({ category }) => {
  const { _id, name: initialCategoryName } = category;

  const [categoryName, setCategoryName] = useState(initialCategoryName);

  const [updateCategory, { data: resCategory, isLoading }] =
    useUpdateCategoryMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory({
      cid: _id,
      data: {
        name: categoryName,
      },
    });
  };

  const navigate = useNavigate();
  // toast message
  useEffect(() => {
    if (resCategory?._id) {
      toast.info("category update successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/manage-categories");
    }
    if (resCategory?.message) {
      toast.error(`${resCategory?.message}`, {
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
  }, [resCategory, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        title="Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
