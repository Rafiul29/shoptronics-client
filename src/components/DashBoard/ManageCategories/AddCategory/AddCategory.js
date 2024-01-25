import { useState } from "react";
import TextInput from "../../../ui/TextInput";
import { useCreateCategoryMutation } from "../../../../features/categories/categoriesApi";

const AddCategory = () => {
  const [createCategory, { data, isLoading, isError }] =
    useCreateCategoryMutation();

  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({
        name:categoryName
    });
  };

  console.log(data);
  return (
    <section className="section-padding mt-20">
      <div className="wrapper">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
            Add new Category
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fillup the form to add new category
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            title="Name"

            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button
            // disabled={isLoading}
            type="submit"
            className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCategory;
