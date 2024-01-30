
import Products from "../../components/Products/Products.js";
import { useTitle } from "../../hooks/useTitle.js";

const ProductPages = () => {

  // title
  useTitle("Products");

  return (
    <>
    <Products/>
    </>
  );
};

export default ProductPages;
