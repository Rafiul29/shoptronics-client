
import Products from "../../components/Products/Products.js";
import { useTitle } from "../../hooks/useTitle.js";

const ProductPages = () => {

  // title
  useTitle("Products");

  return (
    <section className="section-padding mt-20">
    <Products/>
    </section>
  );
};

export default ProductPages;
