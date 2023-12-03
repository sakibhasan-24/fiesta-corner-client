import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "./Food";
import Slider from "./Slider";

export default function Foods() {
  const foods = useLoaderData();
  console.log("foods", foods);
  return (
    <div>
      Foods {foods.length}
      <Slider />
      <section>
        {foods.map((food) => (
          <Food key={food._id} food={food} />
        ))}
      </section>
    </div>
  );
}
