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
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <Profile /> },
        { path: "/add-items", element: <AddCart /> },
        { path: "/my-items", element: <MyCart /> },
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
