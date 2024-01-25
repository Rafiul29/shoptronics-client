import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import { router } from "./routes/router";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div> Checking authentication ......</div>
  ) : (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
