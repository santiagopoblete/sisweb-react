import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/product/ProductPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
