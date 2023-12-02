import React from "react";

export default function Banner() {
  return (
    <div className="sm:w-full bg-gradient-to-t from-[#000000] to-[#000333] grid-cols-1 md:grid-cols-2  grid lg:grid-cols-3 items-center justify-center">
      <div className="lg:col-span-2 my-6">
        <img
          className="rounded-lg w-full lg:w-3/4 md:w-full md:w-3/4 lg:mx-auto"
          src="https://i.ibb.co/K5vCHTk/HD-wallpaper-pizza-slice-food-cheese.jpg"
          alt="banner-image"
        />
      </div>
      <div className="text-center w-4/5 mx-auto lg:col-span-1 text-white space-y-4 mr-4 ">
        <h1 className="font-bold text-7xl space-y-2">
          Quality <span className="text-orange-600 ">Food</span>
        </h1>
        <p>healthy food healty person healthy choise</p>
      </div>
    </div>
  );
}
