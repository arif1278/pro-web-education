import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./routes/router";

function App() {
  return (
    <>
      <RouterProvider router={router} >

      </RouterProvider>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
