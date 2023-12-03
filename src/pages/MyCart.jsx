import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleItem from "./SingleItem";

export default function MyCart() {
  const foods = useLoaderData();
  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:3000/food/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted");
        }
      });
  };
  //   console.log(foods);
  return (
    <section className="max-w-4xl mx-auto">
      <h1>we have total {foods.length}</h1>
      <div className="grid grid-cols-5 gap-4">
        {foods.map((food) => (
          <SingleItem key={food._id} handleDelete={handleDelete} food={food} />
        ))}
      </div>
    </section>
  );
}
