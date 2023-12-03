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
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <Profile /> },
        { path: "/add-items", element: <AddCart /> },
        {
          path: "/my-items",
          loader: () => fetch(`http://localhost:3000/food-items`),
          element: <MyCart />,
        },
        // http://localhost:3000/food-items/656c17d8a5d5b6d76a6ca078
        {
          path: "/details/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:3000/food-items/${params.id}`),
          element: <Details />,
        },

        {
          path: "/edit/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:3000/food-items/${params.id}`),
          element: <Edit />,
        },
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
