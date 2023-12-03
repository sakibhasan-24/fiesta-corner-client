import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleItem from "./SingleItem";

export default function MyCart() {
  const foods = useLoaderData();
  //   console.log(foods);
  return (
    <section className="max-w-4xl mx-auto">
      <h1>we have total {foods.length}</h1>
      <div className="grid grid-cols-5 gap-4">
        {foods.map((food) => (
          <SingleItem key={food._id} food={food} />
        ))}
      </div>
    </section>
  );
}
