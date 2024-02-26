import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cards from "./components/Cards";
import DisplayItems from "./components/DisplayItems";
import  {CartProvider}  from "./components/CreatContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cards",
    element: <Cards />,

  },
  {
    path: "selected",
    element: <DisplayItems />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <CartProvider>
     <RouterProvider router={router} />
     </CartProvider>

  </React.StrictMode>
);
