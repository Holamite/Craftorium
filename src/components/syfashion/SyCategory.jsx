import Image from "next/image";
import Link from "next/link";

const SyCategory = () => {
  const categories = [
    {
      name: "Women",
      href: "#women",
      description:
        "Explore elegant collections for women, perfect for any occasion.",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729432811/stylish-woman-black-long-sleeve-tee-beige-slacks-casual-wear-fashion-full-body-removebg-preview_p1efi2.png",
      alt: "Women Fashion",
    },
    {
      name: "Men",
      href: "#men",
      description:
        "Sophisticated styles to elevate men’s wardrobe for modern living.",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729431252/WhatsApp_Image_2024-10-16_at_4.15.03_AM__1_-removebg-preview_c7muuj.png",
      alt: "Men Fashion",
    },
    {
      name: "Kids",
      href: "#kids",
      description:
        "Fun and stylish outfits for the little ones, comfy and trendy.",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729424327/WhatsApp_Image_2024-10-16_at_4.15.04_AM-removebg-preview_sl92et.png",
      alt: "Kids Fashion",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-16">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white shadow- rounded-lg overflow-hidden w-80 "
        >
          <div className="relative ">
            <Image
              src={category.image}
              alt={category.alt}
              className="object-contain w-full h-60"
              width={200}
              height={200}
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <button
              className="bg-[#92714a] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#93816b] transition duration-300"
              href={categories.href}
            >
              Shop {category.name} wears
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyCategory;
