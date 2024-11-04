import React from "react";

const HerllarnHero = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Images */}
      <div className="absolute inset-0 flex md:flex-row flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729188318/b45950b6-3eb1-45e0-9ac5-32163d9e41b5_fppnht.jpg"
          alt="Image 1"
          width={200}
          height={200}
          className="w-full md:h-full h-40 object-cover "
        />
        <img
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729188589/d099de98-5283-4739-8b15-9cea300b78ab_m8slra.jpg"
          alt="Image 2"
          width={200}
          height={200}
          className="w-full md:h-full h-40 object-cover "
        />
        <img
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729159167/3beaabf0-acdd-45ae-a3a4-79da70642ba2_kdeqze.jpg"
          alt="Image 3"
          width={200}
          height={200}
          className="w-full md:h-full h-40 object-cover "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Captivating Caption */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Discover the Best in Fashion
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center max-w-md">
          Unleash your style with our curated collection of exquisite shoes and
          bags that elevate your every moment.
        </p>
      </div>
    </div>
  );
};

export default HerllarnHero;
