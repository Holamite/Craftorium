"use client";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dxswouxj5/image/upload/v1729159637/ab9103e0-e8fd-437c-b705-3f9e48688588_toqege.jpg",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dxswouxj5/image/upload/v1729158976/d455cd6a-614a-49ec-b7f7-8de00748e24e_epyeny.jpg",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157410/76a5ccd9-e4d6-4368-a037-d239b563d8ee_xnv3yo.jpg",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dxswouxj5/image/upload/v1729159097/bfcfc6b7-da2c-4054-bfbb-89a1a1f85c11_xequu3.jpg",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157443/1b4cb35a-8846-438e-a3e7-5250fe6de101_iagpb0.jpg",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dxswouxj5/image/upload/v1729159167/3beaabf0-acdd-45ae-a3a4-79da70642ba2_kdeqze.jpg",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dxswouxj5/image/upload/v1729159257/981cf7e2-5221-40ba-8c5b-131a7272af93_pv847v.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="relative overflow-hidden my-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Products
      </h2>
      <div className="flex space-x-4 animate-marquee whitespace-nowrap">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-48">
            <div className="rounded-full overflow-hidden shadow-md border border-gray-200">
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
        {/* same thing but repeated */}
        {products.map((product) => (
          <div key={product.id + 10} className="flex-shrink-0 w-48">
            <div className="rounded-full overflow-hidden shadow-md border border-gray-200">
              <Image
                src={product.image}
                alt={`Product ${product.id}`}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
