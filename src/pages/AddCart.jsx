import React, { useState } from "react";

export default function AddCart() {
  const [formData, setFormData] = useState({});
  const handleFormData = (e) => {
    e.preventDefault();

    const foodType = e.target.selectFood.value;
    const foodPrice = e.target.price.value;
    const foodImage = e.target.imageUrl.value;
    const foodRating = e.target.rating.value;
    const foodDescription = e.target.description.value;
    const foodInfo = {
      foodType,
      foodPrice,
      foodImage,
      foodRating,
      foodDescription,
    };
    console.log(foodInfo);
  };
  return (
    <section className="max-w-4xl mx-auto ">
      <h1 className="text-slate-600 text-center font-semibold text-4xl my-8">
        Add Your Food
      </h1>
      <form onSubmit={handleFormData} className=" flex flex-col gap-4">
        <select
          id="selectFood"
          className="w-1/2 mx-auto bg-blue-300 px-4 py-3 rounded-lg"
        >
          <option value="burger">Burger</option>
          <option value="pizza">Pizza</option>
          <option value="sandwich">Sandwich</option>
        </select>
        <input
          className="w-1/2 mx-auto px-4 py-2 bg-slate-200 rounded-md border-0"
          type="text"
          id="foodType"
          defaultValue={"food"}
          readOnly
        />

        <input
          className="w-1/2 mx-auto px-4 py-2 bg-slate-200 rounded-md"
          type="text"
          name=""
          id="imageUrl"
          placeholder="image url"
        />
        <input
          className="w-1/2 mx-auto px-4 py-2 bg-slate-200 rounded-md"
          type="number"
          name=""
          id="price"
          min={60}
          max={1000}
          placeholder="price"
        />
        <textarea
          className="w-1/2 mx-auto px-4 py-2 bg-slate-200 rounded-md"
          name=""
          id="description"
          cols="5"
          placeholder="description"
          rows="5"
        ></textarea>
        <input
          className="w-1/2 mx-auto px-4 py-2 bg-slate-200 rounded-md"
          type="number"
          name=""
          id="rating"
          placeholder="rating"
        />
        <input
          className="w-1/3 bg-blue-700 border-0  font-semibold uppercase text-white my-6 cursor-pointer  mx-auto px-4 py-2 rounded-md"
          type="submit"
          value="add"
        />
      </form>
    </section>
  );
}
