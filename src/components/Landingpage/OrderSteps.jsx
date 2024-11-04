"use client";
import React from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaCreditCard,
  FaSmile,
} from "react-icons/fa";

const OrderSteps = () => {
  const steps = [
    {
      icon: <FaSearch size={40} className="" />,
      title: "Browse Products",
      description: "Explore our unique handmade products.",
    },
    {
      icon: <FaShoppingCart size={40} className="" />,
      title: "Add to Cart",
      description: "Select your favorite items and add them to your cart.",
    },
    {
      icon: <FaCreditCard size={40} className="" />,
      title: "Checkout",
      description:
        "Complete your purchase through our secure checkout process.",
    },
    {
      icon: <FaSmile size={40} className="" />,
      title: "Enjoy Your Purchase",
      description: "Receive your handmade products and smile!",
    },
  ];

  return (
    <div className="py-24 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">How to Order</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:mx-auto max-w-6xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/2 md:w-1/4 p-4 "
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full text-white">
              {step.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold whitespace-nowrap">
              {step.title}
            </h3>
            <p className="mt-2 text-center text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSteps;
