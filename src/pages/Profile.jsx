import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, updateUserProfile, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user?.displayName);
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("userName");
    const userPhoto =
      formData.get("photoURL") ||
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";
    console.log(userName, userPhoto);
    updateUserProfile(userName, userPhoto)
      .then((data) => {
        console.log(data);
        navigate("/");
        toast.success("update successfully");
      })
      .catch((e) => toast.error(e.message));
  };
  //   console.log(user);
  const userPhoto =
    user?.photoURL ||
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";
  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-center">
        {user?.displayName || "(update it)"}{" "}
        <span className="text-amber-500 font-bold">Profile</span>
      </h1>

      <div className="border-4 border-sky-950 max-w-lg mx-auto rounded-md shadow-2xl px-4 py-4 relative">
        <div className="absolute -top-10 left-2 bg-gray-100 cursor-pointer rounded-full">
          <img
            src={userPhoto}
            className="w-[60px] h-[60px] rounded-full object-cover "
            alt="photo"
          />
        </div>
        <div className="text-center font-semibold max-w-md mx-auto">
          <h1>{user?.displayName || "user Name not found"}</h1>
          <h1>Email : {user?.email}</h1>
          <p className="text-slate-500">
            i am regular member of this project. i have created some items also
          </p>
        </div>
      </div>
      <h1 className="bg-amber-800 px-4 py-1 mx-auto uppercase font-bold text-white rounded-md w-1/2 mt-6">
        {" "}
        update Profile
      </h1>
      <form
        onSubmit={handleUpdate}
        className="my-6 max-w-2xl mx-auto text-center flex flex-col gap-6 bg-green-400 rounded-lg px-6 py-6"
      >
        <input
          className="border-0 px-3 py-1 rounded-md"
          type="text"
          name="userName"
          id="userName"
          defaultValue={user?.displayName}
        />
        <input
          className="border-0 px-3 py-1 rounded-md"
          type="email"
          defaultValue={user?.email ? user.email : ""}
          readOnly
        />
        <input
          className="border-0 px-3 py-1 rounded-md"
          type="text"
          name="photoURL"
          id="photoURL"
        />
        <input
          type="submit"
          value="update"
          className="bg-purple-500 px-2 py-1 rounded-md cursor-pointer w-1/2 mx-auto"
        />
      </form>
    </section>
  );
}
