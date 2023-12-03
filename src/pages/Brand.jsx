import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Brand() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/food-items")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  console.log("brand", food);

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <section className="bg-orange-400  mx-auto">
      <h1 className="text-center font-bold text-4xl">Our Items </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-2 lg:ml-20">
        <div
          onClick={() => handleNavigate(`/food/burger`)}
          className="border-2 border-sky-500 shadow-2xl px-2 py-4 cursor-pointer"
        >
          <div>
            <img
              src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
              alt="burger"
            />
          </div>
          <div>
            <h1 className="text-center font-extrabold text-3xl">Burger</h1>
          </div>
        </div>
        <div
          onClick={() => handleNavigate(`/food/pizza`)}
          className="border-2 border-sky-500 shadow-2xl px-2 py-4 cursor-pointer"
        >
          <div>
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
              alt="burger"
            />
          </div>
          <div>
            <h1 className="text-center font-extrabold text-3xl">Pizza</h1>
          </div>
        </div>
        <div
          onClick={() => handleNavigate(`/food/steak`)}
          className="border-2 border-sky-500 shadow-2xl px-2 py-4 cursor-pointer"
        >
          <div>
            <img
              src="https://www.howtocook.recipes/wp-content/uploads/2022/11/rare-steak-recipejpg-500x375.jpg"
              alt="burger"
            />
          </div>
          <div>
            <h1 className="text-center font-extrabold text-3xl">Steak</h1>
          </div>
        </div>
        <div
          onClick={() => handleNavigate(`/food/sandwich`)}
          className="border-2 border-sky-500 shadow-2xl px-2 py-4 cursor-pointer"
        >
          <div>
            <img
              src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/jimmy-johns-jj-gargantuan-1.jpg?quality=82&strip=1"
              alt="burger"
            />
          </div>
          <div>
            <h1 className="text-center font-extrabold text-3xl">Sandwitch</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
