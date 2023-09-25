import Cart from "../components/Cart.js"
import products from "../data/products"


const Products = () => {

  return (
    <div className="py-20 wrapper">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {
        products.map((product)=>(
          <Cart key={product._id} product={product}/>
        ))
      }
     </div>
      </div>
  )
}

export default Products