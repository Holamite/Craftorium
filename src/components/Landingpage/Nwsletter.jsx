"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <div className=" py-16 border border-gray-300 rounded-full mx-4  ">
      <div className="container mx-auto flex flex-col items-center text-center ">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates and offers directly in your inbox!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-row  max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-blue-400 text-white p-3 rounded-r-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
