import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { createUser, createUserOnGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFormData = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    // console.log(userName, userEmail, userPassword);
    if (userPassword.length < 6) {
      return toast.error("at least 6 character required");
    }
    if (!/(?=.*[!@#$%^&*])/.test(userPassword)) {
      return toast.error("One Special Character Needed");
    }
    if (!/(?=.*?[A-Z])/.test(userPassword)) {
      return toast.error("must need one capital letter");
    }
    createUser(userEmail, userPassword)
      .then((data) => {
        console.log(data);
        toast.success("user created Successfully");
        navigate("/");
      })
      .catch((e) => console.log(e.message));
  };
  // handle google sign in
  const handleGoogleSignIn = () => {
    createUserOnGoogle()
      .then((data) => {
        console.log(data);
        toast.success("thanks for your log in");
        navigate("/");
      })
      .catch((e) => toast.error("something went wrong"));
  };
  return (
    <div className="max-w-2xl mx-auto bg-green-600 px-4 py-8 rounded-lg my-12">
      <h1 className="text-center font-bold text-gray-800 mb-6 text-4xl">
        Please SignUp
      </h1>
      <form
        onSubmit={handleFormData}
        className="max-w-xl mx-auto flex flex-col gap-6 items-center justify-center"
      >
        <input
          className="w-3/4 px-4 py-2 rounded-md border-0 "
          type="text"
          name="name"
          id="name"
          placeholder="enter user name"
        />
        <input
          className="w-3/4 px-4 py-2 rounded-md border-0 "
          type="email"
          name="email"
          id="email"
          placeholder="enter user email"
        />
        <input
          className="w-3/4 px-4 py-2 rounded-md border-0 "
          type="password"
          name="password"
          id="password"
        />
        <input
          type="submit"
          value="signup"
          className="bg-blue-400 px-8 cursor-pointer py-3 font-extrabold uppercase rounded-lg"
        />
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-md mx-auto my-4"
          type="button"
        >
          <FaGoogle className=" font-bold text-xl" />
          Sign In With Google
        </button>
      </form>
      <div className="text-center font-semibold space-x-2">
        <p>
          already have an account?
          <Link className="font-bold ml-2" to="/login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
