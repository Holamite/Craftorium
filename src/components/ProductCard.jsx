"use client";

import Link from "next/link";
import { useCart } from "../components/CartContext";

const ProductCard = ({ id, image, name, description, price }) => {
  const { addToCart } = useCart();
  console.log(name, id, image);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, name, price, image });
  };

  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
      <Link href={`/products/${id}`} passHref>
        <div>
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-900">{price}</span>
              <button
                onClick={handleAddToCart}
                className="border border-black text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
