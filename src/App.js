import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Inventory from "./Component/Inventory/Inventory";
import Main from "./Component/layouts/Main";
import Login from "./Component/Login/Login";
import Orders from "./Component/Orders/Orders";
import Shop from "./Component/Shop/Shop";
import Signup from "./Component/SignUp/Signup";
import { productAndCartLoader } from "./Loaders/productAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/shop",
          loader: async () => {
            return fetch("products.json");
          },
          element: <Shop></Shop>,
        },
        {
          path: "order",
          loader: productAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
