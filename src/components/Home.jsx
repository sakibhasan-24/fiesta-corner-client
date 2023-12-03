import Header from "./Header";
import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "../pages/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
