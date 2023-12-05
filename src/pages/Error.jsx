import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <img
          className="w-full object-cover"
          src="https://st4.depositphotos.com/13288286/20658/v/450/depositphotos_206587176-stock-illustration-404-error-page-found-vector.jpg"
          alt="error"
        />
      </div>
      <div className=" px-6 py-2 rounded-md font-bold flex items-center justify-center">
        <Link to="/">
          <img
            src="https://img.freepik.com/premium-vector/pizza-logo-vector_25327-119.jpg"
            className="w-[100px] h-[100px] rounded-full shadow-2xl hover:scale-50 transition duration-200"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
