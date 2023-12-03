import React from "react";
import { Link } from "react-router-dom";

export default function SingleItem({ food }) {
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
    <div className="border-2 rounded-md shadow-xl my-6 border-sky-600 flex flex-col">
      <div className="w-full shadow-xl flex-grow">
        <img
          className="w-full h-[160px] mx-auto rounded-lg  px-2 py-4"
          src={foodImage}
          alt="food"
        />
      </div>
      <div className="py-4">
        <h1 className="text-slate-600 text-center font-semibold whitespace-nowrap">
          {foodName || "no food Name"}
        </h1>
        <div className="flex items-center justify-between mx-2 text-xs font-semibold">
          <p className="bg-blue-600 text-white px-1 rounded-md">
            {foodPrice} BDT
          </p>
          <p className="bg-orange-500 px-2 rounded-md mb-4">
            rating: {foodRating}
          </p>
        </div>
        <Link
          className="bg-blue-500 ml-12 text-white text-xs rounded-md px-4 py-1"
          to={`/details/${_id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
