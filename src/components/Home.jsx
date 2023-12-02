import Header from "./Header";
import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
