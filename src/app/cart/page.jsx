"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { useCart } from "../../components/CartContext";
import { allSyCollection } from "../../../craftToriumData";
import Link from "next/link";
import { useAuth } from "../../components/AuthContext";
// import AuthPage from "../pages/api/authpage/page";

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart, decreaseFromCart } = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated
  const logo = "Craftorium";

  const generalLinks = [
    { href: "/", name: "Home", icon: <FiShoppingBag className="mr-2" /> },
    { href: "/account", name: "Account", icon: <FiUser className="mr-2" /> },
  ];

  const handleIncrease = (item) => {
    if (item.quantity > 0) {
      addToCart(item);
    }
  };

  const handleDecrease = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    if (item && item.quantity > 1) {
      decreaseFromCart(id);
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (isAuthenticated) {
      setCheckoutMessage("Redirecting to payment...");
    } else {
      setCheckoutMessage("Please log in to proceed with checkout.");
    }
  };

  return (
    <div>
      <Navbar logo={logo} generalLinks={generalLinks} showLogo={true} />
      <div className="container mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => {
              const productData = allSyCollection.find(
                (product) => product.id === item.id
              );
              const vendorName = productData
                ? productData.vendor
                : "Unknown Vendor";

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 space-y-4 rounded-md shadow-md p-4 bg-white"
                >
                  <div className="w-1/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                  <div className="w-2/5 text-left space-y-1">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Vendor: {vendorName}</p>
                    <p className="text-gray-700">Price: ${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4 w-1/5 justify-end">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className={`bg-gray-300 px-2 py-1 rounded text-lg font-semibold ${
                        item.quantity <= 1 && "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="bg-gray-300 px-2 py-1 rounded text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-1/5 text-right">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Checkout Section */}
            <div className="bg-gray-50 p-6 rounded-md shadow-md mt-8">
              <div className="text-right mb-6">
                <h3 className="text-2xl font-bold">
                  Total Amount:{" "}
                  <span className="text-blue-400">
                    ${totalAmount.toFixed(2)}
                  </span>
                </h3>
              </div>
              {isAuthenticated ? (
                <Link href="/checkout">
                  <button
                    className="bg-blue-400 text-white px-8 py-3 rounded-md w-full md:w-1/2 font-semibold hover:bg-bluegreen-200"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </Link>
              ) : (
                <Link href="/pages/authpage">
                  <button
                    className="bg-blue-400 text-white px-8 py-3 rounded-md w-full md:w-1/2 font-semibold hover:bg-bluegreen-200"
                    onClick={handleCheckout}
                  >
                    Log in to Checkout
                  </button>
                </Link>
              )}
              {checkoutMessage && (
                <p className="mt-4 text-center text-lg text-blue-400 font-semibold">
                  {checkoutMessage}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
