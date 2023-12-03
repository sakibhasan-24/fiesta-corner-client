import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer p-10 bg-blue-950 text-white">
      <aside>
        <img
          src="https://img.freepik.com/premium-vector/pizza-logo-vector_25327-119.jpg"
          className="w-[90px] h-[90px] rounded-xl"
          alt=""
        />
        <p className="text-xs">
          <span className="text-orange-500 text-xl font-bold">Sharing</span>{" "}
          Business LTD.
          <br />
          Providing reliable tech since 2022
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Food Delivary</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Staff</a>
      </nav>
      <nav>
        <header className="footer-title">Procedure</header>
        <a className="link link-hover">Create Food</a>
        <a className="link link-hover">Upload here</a>
      </nav>
      <nav>
        <header className="footer-title ">Social</header>
        <div className="flex gap-4 items-center text-3xl">
          <a className="link link-hover ">
            <FaFacebookF />
          </a>
          <a className="link link-hover">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </footer>
  );
}
