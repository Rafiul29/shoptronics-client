import TextInput from "../../../ui/TextInput";
import { useEffect, useState } from "react";
import TextArea from "../../../ui/TextArea";
import { useGetAllCategoriesQuery } from "../../../../features/categories/categoriesApi";
import { useGetAllBrandsQuery } from "../../../../features/brands/brandsApi";
import { useAddProductMutation } from "../../../../features/products/productsApi";
import { toast } from "react-toastify";
import { useTitle } from "../../../../hooks/useTitle";

const Form = () => {
  // page title
  useTitle("add product");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_link, setImage_link] = useState("");
  const [price, setPrice] = useState("");
  const [totalQty, setTotalQty] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");

  // get all categories
  const { data: categories } = useGetAllCategoriesQuery();

  // get all brands
  const { data: brands } = useGetAllBrandsQuery();

  const [addProduct, { data: resProduct, isLoading }] = useAddProductMutation();

  // reset form
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage_link("");
    setBrandId("");
    setCategoryId("");
    setPrice("");
    setTotalQty("");
  };
  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      title,
      description,
      image_link,
      price,
      totalQty,
      categoryId,
      brandId,
    });
    resetForm();
  };

  // toast message
  useEffect(() => {
    if (resProduct?._id) {
      toast.info("product added successfully", {
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 ">
              <TextInput
                type="text"
                title="Product title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                type="text"
                title="Product image link"
                value={image_link}
                onChange={(e) => setImage_link(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-md   font-medium text-gray-700">
                Brand
              </label>
              <select
                name="brand"
                value={brandId}
                onChange={(e) => setBrandId(e.target.value)}
                className="mt-1  block w-full rounded-md border-gray-300 py-2  pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
              >
                <option>-- Select brand --</option>
                {brands?.length > 0 &&
                  brands?.map((brand) => (
                    <option key={brand?._id} value={brand?._id}>
                      {brand.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-md   font-medium text-gray-700">
                Category
              </label>
              <select
                required
                name="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="mt-1  block w-full rounded-md border-gray-300 py-2  pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
              >
                <option>-- select category --</option>
                {categories?.length > 0 &&
                  categories?.map((category) => (
                    <option key={category?._id} value={category?._id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                type="number"
                title="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <TextInput
                type="number"
                title="Total Quantity"
                value={totalQty}
                onChange={(e) => setTotalQty(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 duration-500"
          >
            save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
