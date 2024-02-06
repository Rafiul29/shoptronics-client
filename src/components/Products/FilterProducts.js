import React, { useState } from "react";
import { useGetAllCategoriesQuery } from "../../features/categories/categoriesApi";
import { useGetAllBrandsQuery } from "../../features/brands/brandsApi";
import Error from "../ui/Error";
import { useGetProductsQuery } from "../../features/products/productsApi";

const FilterProducts = () => {
  const [title, setTitle] = useState("");

  const [brandId, setBrandId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [showBrand, setShowBrand] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  let setUrl = "?";
  if (title) {
    setUrl = `${setUrl}title=${title}`;
  }

  if (categoryId) {
    setUrl = `${setUrl}categoryId=${categoryId}`;
    // setCategoryId("")
  }

  if (brandId) {
    setUrl = `${setUrl}&brandId=${brandId}`;
    // setBrandId("")
  }


  const { data: products, isError, isLoading } = useGetProductsQuery(setUrl);

  //get all categories
  const {
    data: categories,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetAllCategoriesQuery();
  //get all categories
  const {
    data: brands,
    isLoading: brandLoading,
    isError: brandError,
  } = useGetAllBrandsQuery();
  //decide what to do render;
  let content = null;
  if (categoryLoading && brandLoading) {
    content = <div>Loading.....</div>;
  }
  if (!categoryLoading && !brandLoading && brandError && categoryError) {
    content = <Error message=" not found" />;
  }
  if (
    !categoryLoading &&
    !brandLoading &&
    !categoryError &&
    !brandError &&
    categories?.length === 0 &&
    brands?.length === 0
  ) {
    content = <Error message="not found" />;
  }

  return (
    <div>
      {content && content}
      {!content && (
        <div className="flex flex-col space-y-4 mb-10">
          <div className=" border ">
            {" "}
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="search product"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h2 onClick={() => setShowCategory(!showCategory)}>Category</h2>
            <div
              className={`${
                !showCategory && "hidden"
              } "flex space-x-2 space-y-1 flex-wrap"`}
            >
              {categories?.length > 0 &&
                categories?.map((category) => (
                  <button
                    onClick={() => setCategoryId(category._id)}
                    key={category._id}
                    className="bg-blue-50 border-2 border-blue-300 focus:bg-blue-300 px-3 py-2 rounded-md"
                  >
                    {category.name}
                  </button>
                ))}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 onClick={() => setShowBrand(!showBrand)}>Brands</h2>
            <div
              className={`${
                !showBrand && "hidden"
              } "flex space-x-2 space-y-1 flex-wrap"`}
            >
              {brands?.length > 0 &&
                brands?.map((brand) => (
                  <button
                    onClick={() => setBrandId(brand._id)}
                    key={brand._id}
                    className="bg-blue-50 border-2 border-blue-300 focus:bg-blue-300 px-3 py-2 rounded-md"
                  >
                    {brand.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterProducts;
