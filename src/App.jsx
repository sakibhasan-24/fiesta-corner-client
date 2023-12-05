import React, { Children } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import AddCart from "./pages/AddCart";
import MyCart from "./pages/MyCart";
import Details from "./Details";
import Edit from "./Edit";
import Foods from "./pages/Foods";
import Protected from "./routes/Protected";
import Error from "./pages/Error";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/profile",
          element: (
            <Protected>
              <Profile />
            </Protected>
          ),
        },
        {
          path: "/add-items",
          element: (
            <Protected>
              <AddCart />
            </Protected>
          ),
        },
        {
          path: "/my-items",
          loader: () =>
            fetch(`https://fiesta-server-code.onrender.com/food-items`),
          element: (
            <Protected>
              <MyCart />
            </Protected>
          ),
        },

        {
          path: "/details/:id",
          loader: ({ params }) =>
            fetch(
              `https://fiesta-server-code.onrender.com/food-items/${params.id}`
            ),
          element: (
            <Protected>
              <Details />
            </Protected>
          ),
        },
        {
          path: "/food/:foodType",
          loader: ({ params }) =>
            fetch(
              `https://fiesta-server-code.onrender.com/getFood/${params.foodType}`
            ),
          element: <Foods />,
        },

        {
          path: "/edit/:id",
          loader: ({ params }) =>
            fetch(
              `https://fiesta-server-code.onrender.com/food-items/${params.id}`
            ),
          element: (
            <Protected>
              <Edit />
            </Protected>
          ),
        },
        { path: "*", element: <Error /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
