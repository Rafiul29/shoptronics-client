import { useEffect, useState } from "react";
import TextInput from "../../../ui/TextInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUpdateBrandMutation } from "../../../../features/brands/brandsApi";

const Form = ({ brand }) => {

  const { _id, name: initialBrandName } = brand;

  const [brandName, setBrandName] = useState(initialBrandName);

  const [updateCategory, { data: resBrand, isLoading }] =useUpdateBrandMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory({
      bid: _id,
      data: {
        name: brandName,
      },
    });
  };

  const navigate = useNavigate();
  // toast message
  useEffect(() => {
    if (resBrand?._id) {
      toast.info("brand update successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/manage-brands");
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
  }, [resBrand, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        title="Name"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
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
