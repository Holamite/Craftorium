"use client";
import Navbar from "../../../components/Navbar";
import { allSyCollection } from "../../../../craftToriumData";
import {
  FiShoppingBag,
  FiPercent,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../../../components/CartContext";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = allSyCollection.find(
      (product) => product.id == params.id
    );
    if (foundProduct) {
      setProduct(foundProduct);

      // Set default size and color if available
      setSelectedSize(foundProduct.sizes?.[0] || null);
      setSelectedColor(foundProduct.colors?.[0] || null);
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleQuantityChange = (action) => {
    setQuantity((prev) =>
      action === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const totalPrice = product ? (product.price * quantity).toFixed(2) : "0.00";
  const logo = "Craftorium";
  const generalLinks = [
    { href: "/", name: "Home", icon: <FiShoppingBag className="mr-2" /> },

    { href: "/account", name: "Account", icon: <FiUser className="mr-2" /> },
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-6xl text-center p-20">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar logo={logo} generalLinks={generalLinks} showLogo={true} />
      <div className="container mx-auto md:py-12 py-4 px-4 md:px-20 bg-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full h-96 relative">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              priority
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col space-y-2 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-700 font-bold">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>

            <div>
              <h3 className="text-lg font-semibold">Select Size:</h3>
              <div className="flex space-x-3 mt-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md py-2 px-4 ${
                      selectedSize === size ? "bg-blue-400" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Select Color:</h3>
              <div className="flex space-x-3 mt-2">
                {product.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`border rounded-md py-2 px-4 ${
                      selectedColor === color ? "bg-blue-400 animate-text" : ""
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Quantity:</h3>
              <div className="flex space-x-4 items-center mt-2">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="bg-gray-400 py-2 px-4 rounded-full"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="bg-gray-400 py-2 px-4 rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Total Price:</h3>
              <p className="text-xl font-bold">${totalPrice}</p>
            </div>

            <button
              className="bg-blue-400 py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 font-semibold"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
