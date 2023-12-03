import React from "react";
import Banner from "../pages/Banner";
import Services from "../pages/Services";
import Procedure from "../pages/Procedure";
import Brand from "../pages/Brand";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Brand />
      <Services />
      <Procedure />
    </div>
  );
}
