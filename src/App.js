import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Inventory from "./Component/Inventory/Inventory";
import Main from "./Component/layouts/Main";
import Login from "./Component/Login/Login";
import Orders from "./Component/Orders/Orders";
import Shipping from "./Component/Shipping/Shipping";
import Shop from "./Component/Shop/Shop";
import Signup from "./Component/SignUp/Signup";
import { productAndCartLoader } from "./Loaders/productAndCartLoader";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("http://localhost:5000/products");
          },
          element: <Shop></Shop>,
        },
        // remove this for home design
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "/order",
          loader: productAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/about",
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
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
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
