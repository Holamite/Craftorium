"use client";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[400px]  overflow-hidden md:my-16">
      {/* Background Image */}
      <div className="absolute inset-0 md:mx-20">
        <Image
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729163048/banner_1_yaugqi.png"
          alt="Banner Background"
          width={200}
          height={200}
          className="object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Banner Content */}
      <div className="relative  flex-col items-center justify-center w-full h-full text-white -mt-4 md:flex hidden">
        <h1 className="md:text-4xl font-bold text-center">
          Discover the Art of Handmade Fashion
        </h1>
        <p className="mt-2 md:text-lg text-center max-w-xl">
          Experience unique styles and quality craftsmanship with every piece.
        </p>
        <a
          href="#featured-products"
          className="mt-2 px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-400 to-blue-400  rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
