import Homepage from "../pages/Homepage";
import About from "../pages/About";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail/>
      },
      {
        path: "/products",
        element: <Products/>
      }
    ],
  },
]);

export default router;
