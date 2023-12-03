import React from "react";
import Banner from "../pages/Banner";
import Services from "../pages/Services";
import Procedure from "../pages/Procedure";
import Brand from "../pages/Brand";
import Footer from "../pages/Footer";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function HomePage() {
  // const [isDarkMode, setDarkMode] = React.useState();

  // const toggleDarkMode = (checked) => {
  //   setDarkMode(checked);
  // };
  return (
    <div>
      {/* <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={120}
      /> */}

      <Banner />
      <Brand />
      <Services />
      <Procedure />
    </div>
  );
}
