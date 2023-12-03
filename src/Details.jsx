import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export default function Details() {
  const food = useLoaderData();
  console.log(food);
  const {
    _id,
    foodDescription,
    foodImage,
    foodPrice,
    foodRating,
    foodType,
    foodName,
  } = food;
  return (
    <div className="max-w-3xl mx-auto my-4">
      <h1 className="text-center font-semibold text-green-300 text-4xl my-6">
        Details Information
      </h1>
      <div className="border-4 border-sky-950">
        <div className="px-1 py-2 rounded-lg w-3/4 mx-auto">
          <img
            className="rounded-lg object-cover w-full mx-auto"
            src={foodImage}
            alt="image"
          />
        </div>
        <div className="max-w-lg mx-auto text-center bg-slate-200 rounded-lg py-2 px-4">
          <h1 className="text-lg font-bold bg-green-950 text-white px-4 py-1 rounded-md">
            {foodType}
          </h1>
          <h1 className="text-2xl font-semibold">{foodName}</h1>
          <p className="text-slate-500">{foodDescription}</p>
          <p className="bg-blue-950 w-1/2 mx-auto text-white text-xs py-1 rounded-lg">
            price:{foodPrice}Bdt
          </p>
          <p className="bg-green-950 my-2 w-1/2 mx-auto text-white text-xs py-1 rounded-lg">
            rating:{foodRating}
          </p>
        </div>
        <div className="max-w-lg mx-auto flex items-center justify-between my-6">
          <Link to={`/edit/${_id}`}>
            <FaEdit className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
