"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-3xl font-bold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 animate-text">
            Craftorium
          </h3>
          <p className="text-gray-400">Handmade Fashion Products</p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Popoola Rahmat Omowumi. All Rights
          Reserved.
        </p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
