import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Food from "./Food";
import Slider from "./Slider";

export default function Foods() {
  const { foodType } = useParams();
  const foods = useLoaderData();
  console.log("foods", foods);
  return (
    <div>
      <Slider />
      <h1 className="text-center font-bold text-2xl">
        we have {foods.length} items {foodType}
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
        <>
          {foods.length === 0 ? (
            <div className="  text-center">
              <h1 className="mt-2 mb-10">No Itesm added</h1>
              <Link
                className="bg-green-900 text-white px-4 py-2 rounded-md font-bold "
                to="/add-items"
              >
                Add Items
              </Link>
            </div>
          ) : (
            foods.map((food) => <Food key={food._id} food={food} />)
          )}
        </>
      </section>
    </div>
  );
}
