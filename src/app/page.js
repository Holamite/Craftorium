import React from "react";
import Navbar from "../components/Navbar";
import { CartProvider } from "@/components/CartContext";
import {
  FiShoppingBag,
  FiPercent,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import HeroSection from "@/components/Landingpage/HeroSection";
import WelcomeBar from "@/components/Landingpage/WelcomeBar";
import WhyUs from "@/components/Landingpage/WhyUs";
import FeaturedProducts from "@/components/Landingpage/FeaturedProducts";
import Banner from "@/components/Landingpage/Banner";
import OrderSteps from "@/components/Landingpage/OrderSteps";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Landingpage/Nwsletter";

const Home = () => {
  const logo = "Craftorium";
  const generalLinks = [
    { href: "/", name: "Home", icon: <FiShoppingBag className="mr-2" /> },

    { href: "/account", name: "Account", icon: <FiUser className="mr-2" /> },
  ];

  return (
    <CartProvider>
      <Navbar logo={logo} generalLinks={generalLinks} showLogo={true} />
      <WelcomeBar />
      <HeroSection />
      <WhyUs />
      <FeaturedProducts />
      <Banner />
      <OrderSteps />
      <Newsletter />
      <Footer />
    </CartProvider>
  );
};

export default Home;
