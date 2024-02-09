import Hero from "../../components/Hero";
import Products from "../../components/Products/Products";
import { useTitle } from "../../hooks/useTitle";
// import Products from "../Products/Products"

const Home = () => {
   // title  
    useTitle("")

   
  return (
   <>
    <main>
    <Hero/>
    <Products/>
    </main>
   </>
  )
}

export default Home;