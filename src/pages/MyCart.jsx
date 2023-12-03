import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

import SingleItem from "./SingleItem";

export default function MyCart() {
  const foods = useLoaderData();
  const [items, setItems] = useState(foods);
  console.log("items", items.length);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to delete?",
      text: "The item will be delete.no backup !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/food/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The item has been deleted.",
                icon: "success",
              });
              const newItems = items.filter((food) => food._id !== id);
              setItems(newItems);
            }
          });
      }
    });
  };

  return (
    <section className="max-w-4xl mx-auto">
      <h1>we have total {items.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3  gap-4">
        {items?.map((food) => (
          <SingleItem key={food._id} handleDelete={handleDelete} food={food} />
        ))}
      </div>
    </section>
  );
}
