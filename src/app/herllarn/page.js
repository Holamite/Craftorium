import Navbar from "../../components/Navbar";
import { FiShoppingCart } from "react-icons/fi";

import { IoMan } from "react-icons/io5";
import { IoWomanSharp } from "react-icons/io5";
import { TbCookieMan } from "react-icons/tb";
import HerllarnHero from "@/components/herllarn/HerllarnHero";
import Aim from "@/components/herllarn/Aim";
import MenCollection from "@/components/herllarn/MenCollection";
import FemaleCollection from "@/components/herllarn/FemaleCollection";
import Footer from "@/components/Footer";

import Image from "next/image";
import HerllarnCrafting from "@/components/herllarn/HerllarnCrafting";
import { CartProvider } from "@/components/CartContext";

const HerllarnPage = () => {
  const vendorLogo =
    "https://res.cloudinary.com/dxswouxj5/image/upload/v1729154873/herllarn_qih5pm.jpg";

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
      <HerllarnHero />
      <Aim />
      <MenCollection />
      <FemaleCollection />
      <div className="my-10  ">
        <Image
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729194857/Red_White_Yellow_Modern_Minimalist_Shoes_New_Arrival_Promotion_Banner_Landscape_1_luvat9.png"
          alt=""
          width={200}
          height={200}
          className="md:h-[70vh] w-full object-contain"
        />
      </div>

      <HerllarnCrafting />
      <Footer />
    </CartProvider>
  );
};

export default HerllarnPage;
