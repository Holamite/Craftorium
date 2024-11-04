import Navbar from "../../components/Navbar";
import { FiShoppingCart } from "react-icons/fi";

import { IoMan } from "react-icons/io5";
import { IoWomanSharp } from "react-icons/io5";
import { TbCookieMan } from "react-icons/tb";

import Footer from "@/components/Footer";

import Image from "next/image";
import SyfashionHero from "@/components/syfashion/SyfashionHero";
import SyCategory from "@/components/syfashion/SyCategory";
import SyVideo from "@/components/syfashion/SyVideos";
import SyWomen from "@/components/syfashion/SyWomen";
import SyMen from "@/components/syfashion/SyMen";
import SyKids from "@/components/syfashion/SyKIds";
import { CartProvider } from "@/components/CartContext";

const SyfashionPage = () => {
  const vendorLogo =
    "https://res.cloudinary.com/dxswouxj5/image/upload/v1729154873/empire_dyrstq.jpg";

  const generalLinks = [
    { href: "#men", name: "Men", icon: <IoMan className="mr-2" /> },
    { href: "#women", name: "Women", icon: <IoWomanSharp className="mr-2" /> },
    {
      href: "#kids",
      name: "Kids",
      icon: <TbCookieMan className="mr-2" />,
    },
  ];

  return (
    <CartProvider>
      <Navbar
        generalLinks={generalLinks}
        showLogo={false}
        vendorLogo={vendorLogo}
      />
      <SyfashionHero />
      <div className="bg-[#92714a] overflow-x-hidden ">
        <div className="animate-scroll text-6xl p-4 text-white">
          <span>
            ONE-STOP SHOP FOR EVERYTHING STREET WEARS... ONE-STOP SHOP FOR
            EVERYTHING STREET WEARS... ONE-STOP SHOP FOR EVERYTHING STREET WEARS
          </span>
        </div>
      </div>
      <SyCategory />
      <div className="relative w-full h-[60vh] my-16 bg-black">
        <Image
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729421374/personal-shopper-store-working_epau85.jpg"
          alt="stores"
          width={200}
          height={200}
          className="w-full h-[60vh] object-contain  absolute"
        />
        <div className="bg-black opacity-40 inset-0 absolute z-10"></div>

        <h1 className="absolute inset-0 flex flex-col justify-center items-center text-white mx-4 md:text-6xl text-3xl">
          Enjoy 10% discount on every <br /> order make on our website
        </h1>
      </div>
      <SyWomen />
      <SyMen />
      <SyKids />
      <SyVideo />
      <Footer />
    </CartProvider>
  );
};

export default SyfashionPage;
