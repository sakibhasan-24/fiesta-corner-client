import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Foods() {
  const foods = useLoaderData();
  console.log("foods", foods);
  return <div>Foods {foods.length}</div>;
}
