import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

export default function Header() {
  const { user, loading, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handlePathRoute = (route) => {
    if (location.pathname === route) return true;
  };
  const handleSignOut = () => {
    logOut()
      .then((data) => {
        toast.success(`${user.userName || "user"} log out`);
        navigate("/login");
      })
      .catch((e) => toast.error("something went wrong"));
  };
  return (
    <section className="bg-gradient-to-r from-slate-900 to-gray-950">
      <header className="max-w-6xl mx-auto  flex items-center justify-between py-6 px-4">
        <div className="font-bold">
          <Link className={`text-white `} to="/">
            <img
              className="w-[70px] h-[70px] rounded-full shadow-2xl"
              src="https://img.freepik.com/premium-vector/pizza-logo-vector_25327-119.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center justify-center text-white font-semibold space-x-4">
          <Link
            className={`text-white ${
              handlePathRoute("/add-items") &&
              "font-extrabold text-purple-400 bg-red-800 px-2 py-1 rounded-lg whitespace-nowrap"
            }`}
            to="/add-items"
          >
            Add Food
          </Link>
          <Link
            className={`text-white ${
              handlePathRoute("/my-items") &&
              "font-extrabold text-purple-400 bg-red-800 px-2 py-1 rounded-lg whitespace-nowrap"
            }`}
            to="/my-items"
          >
            My items
          </Link>
          {user?.email ? (
            <>
              <Link
                className={`text-white ${
                  handlePathRoute("/profile") &&
                  "font-extrabold text-purple-400 bg-red-800 px-2 py-1 rounded-lg whitespace-nowrap"
                }`}
                to="/profile"
              >
                Profile
              </Link>
              <Link
                onClick={handleSignOut}
                className={`text-white ${
                  handlePathRoute("/login") &&
                  "font-extrabold text-purple-400 bg-red-800 px-2 py-1 rounded-lg whitespace-nowrap"
                }`}
                to="/login"
              >
                signOut
              </Link>
            </>
          ) : (
            <>
              <Link
                className={`text-white ${
                  handlePathRoute("/login") &&
                  "font-extrabold text-purple-400 bg-red-800 px-2 py-1 rounded-lg whitespace-nowrap"
                }`}
                to="/login"
              >
                Login
              </Link>
              <Link
                className={`text-white ${
                  handlePathRoute("/signup") &&
                  "font-extrabold text-purple-400 bg-red-800 px-2 py-1 rounded-lg whitespace-nowrap"
                }`}
                to="/signup"
              >
                signup
              </Link>
            </>
          )}
        </div>
      </header>
    </section>
  );
}
