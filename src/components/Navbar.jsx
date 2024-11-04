// Navbar Component
"use client";
import { useCart } from "../components/CartContext";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const Navbar = ({ logo, vendorLogo, generalLinks, showLogo }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get cart state from CartContext
  const { cartItemCount } = useCart();
  const vendorLinks = [
    { href: "/herllarn", name: "Herllarn Shoes & Bags" },
    { href: "/syfashion", name: "SY Fashion Designer" },
    { href: "/ria", name: "Ria Accessories" },
  ];

  return (
    <nav className="bg-black shadow-lg p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {showLogo ? (
            <span className="text-3xl font-bold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 animate-text">
              {logo}
            </span>
          ) : (
            <img
              src={vendorLogo}
              alt="Vendor Logo"
              className="h-12 w-12 rounded-full md:ml-12 object-cover"
            />
          )}
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8 items-center flex-grow justify-center">
          {generalLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex items-center hover:text-blue-600 font-semibold text-white"
            >
              {link.icon} {link.name}
            </Link>
          ))}
          <Link
            href="/cart"
            className="text-white flex relative items-center hover:text-blue-600 font-semibold gap-2"
          >
            <FiShoppingCart size={16} />
            {cartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount()}
              </span>
            )}
            <span>Cart</span>
          </Link>
        </div>

        {/* Vendor Dropdown */}
        <div className="relative md:mr-20 text-center">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 hover:from-purple-400 hover:to-indigo-500 font-bold"
          >
            Vendors <span>&#x25BC;</span>
          </button>
          {dropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-50"
              onClick={() => setDropdownOpen(false)}
            >
              {vendorLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-blue-600 focus:outline-none md:hidden"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          {generalLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex items-center text-white hover:text-blue-600 font-semibold"
            >
              {link.icon} {link.name}
            </Link>
          ))}
          <Link
            href="/cart"
            className="text-white flex relative items-center hover:text-blue-600 font-semibold gap-2"
          >
            <FiShoppingCart size={16} />
            {cartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount()}
              </span>
            )}
            <span>Cart</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
