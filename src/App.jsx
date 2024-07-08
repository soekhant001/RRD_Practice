import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import { Home,About,ProductDetail,Products } from "./Pages/index";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
         index : true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },{
          path : "/product/:title",
          element : <ProductDetail />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
