import Card from "../components/Card.js";
import products from "../data/products";

const Products = () => {
  return (
    <section className="section-padding mt-20">
    <div className="wrapper">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
    </div>
    </section>
  );
};

export default Products;
