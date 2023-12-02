import React from "react";

export default function Procedure() {
  return (
    <section className="bg-gradient-to-r from-[#FF6347] to-[#8B4513]">
      <h1 className="text-5xl text-center text-white font-semibold py-6 ">
        Working With Us?
      </h1>
      <div className="w-full lg:max-w-4xl md:max-w-2xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-2 lg:gap-6 py-4 ">
        <div className="border-2 border-sky-900 shadow-2xl flex flex-col ">
          <div className="w-full flex-grow">
            <img
              className="rounded-md w-full px-1 "
              src="https://i.ibb.co/r58B8Nk/homemade-pizza-school-make-homemade-pizza-10x-better-fresh-pie-with-cutter-and-toppings-1024x629.jpg"
              alt="pizza"
            />
          </div>
          <div className="text-center px-2 py-4">
            <h1 className="font-semibold text-lg text-slate-800">
              Create A Food
            </h1>
            <p>
              using a form you can also be a business member of our
              organization.Just three Steps.
            </p>
          </div>
        </div>
        <div className="border-2 border-sky-900 shadow-2xl flex flex-col ">
          <div className="w-full flex-grow">
            <img
              className="rounded-md  w-full px-1"
              src="https://i.ibb.co/XCK3LYx/3456388.png"
              alt="pizza"
            />
          </div>
          <div className="text-center px-2 py-4">
            <h1 className="font-semibold text-lg text-slate-800">
              Register Now!
            </h1>
            <p>Using Google or email and passwrod create a profile</p>
          </div>
        </div>
        <div className="border-2 border-sky-900 shadow-2xl flex flex-col ">
          <div className="w-full flex-grow">
            <img
              className="rounded-md  w-full px-1"
              src="https://i.ibb.co/4JPBzCk/2680985.png"
              alt="pizza"
            />
          </div>
          <div className="text-center px-2 py-4">
            <h1 className="font-semibold text-lg text-slate-800">
              Submit A Form!
            </h1>
            <p>Fill all the information about your food.</p>
          </div>
        </div>
        <div className="border-2 border-sky-900 shadow-2xl flex flex-col ">
          <div className="w-full flex-grow">
            <img
              className="rounded-md  w-full px-1"
              src="https://i.ibb.co/nRcHLW8/6001245.png"
              alt="pizza"
            />
          </div>
          <div className="text-center px-2 py-4">
            <h1 className="font-semibold text-lg text-slate-800">
              Want Delete/Modification?
            </h1>
            <p>If you are login then always welcome what you want.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
