import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col px-4 sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="w-40 mb-5" />
          <p className="w-full md:w-2/3 leading-6 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum magni, fuga nemo, dolores quasi quis obcaecati dolor placeat et quibusdam? Non, totam sapiente placeat unde a dolorum deserunt repudiandae!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 uppercase">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-[#5f6fff] cursor-pointer">Home</li>
            <li className="hover:text-[#5f6fff] cursor-pointer">About us</li>
            <li className="hover:text-[#5f6fff] cursor-pointer">Contact us</li>
            <li className="hover:text-[#5f6fff] cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 uppercase">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 123-1423</li>
            <li>test@demo.com</li>
          </ul>
        </div>
      </div>
      <div className="py-5 mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        Copyright 2024@ HMS - All right reserveā
      </div>
    </footer>
  );
}

export default Footer;
