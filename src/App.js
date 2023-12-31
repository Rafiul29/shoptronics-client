import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProductItem from "./components/ProductItem";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./components/routes/PublicRoute";

function App() {
const authChecked=useAuthCheck();

return !authChecked? (<div> Checking authentication ......</div>):(
  <>
  <Navbar/>
  <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/products" element={<Products/>}/>
      <Route path="/product/:pid" element={<ProductItem/>}/>

      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

      <Route path="/sign-up" element={<PublicRoute><SignUp/></PublicRoute>}/>
      <Route path="/sign-in" element={ <PublicRoute><SignIn/></PublicRoute>}/>
     
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   <Footer/>
  </>
)
  // return (
  //   <>
  //   <Navbar/>
  //   <ToastContainer/>
  //     <Routes>
  //       <Route path="/" element={<Home/>}/>

  //       <Route path="/products" element={<Products/>}/>
  //       <Route path="/product/:pid" element={<ProductItem/>}/>

  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/contact" element={<Contact/>}/>

  //       <Route path="/sign-up" element={<SignUp/>}/>
  //       <Route path="/sign-in" element={<SignIn/>}/>
       
  //       <Route path="*" element={<NotFound/>}/>
  //     </Routes>
  //    <Footer/>
  //   </>
  // );
}

export default App;
