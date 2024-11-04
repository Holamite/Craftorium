"use client";
import { FaHandPaper, FaGem, FaRecycle, FaLeaf } from "react-icons/fa";

const WhyUs = () => {
  const features = [
    {
      icon: <FaHandPaper className="text-blue-500 w-12 h-12" />,
      title: "Handcrafted Excellence",
      description:
        "Each item is meticulously handcrafted by skilled artisans, ensuring top-notch quality in every stitch.",
    },
    {
      icon: <FaGem className="text-pink-500 w-12 h-12" />,
      title: "Unique Designs",
      description:
        "Stand out with one-of-a-kind designs that blend timeless fashion with modern trends, making you truly unique.",
    },
    {
      icon: <FaRecycle className="text-green-500 w-12 h-12" />,
      title: "Durable & Sustainable",
      description:
        "Our products are made to last, combining durable materials with sustainable practices for a lasting impact.",
    },
    {
      icon: <FaLeaf className="text-yellow-500 w-12 h-12" />,
      title: "Ethically Made",
      description:
        "We prioritize fair labor and environmentally friendly processes, so you can feel good about what you wear.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Why Choose Our Handmade Fashion
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the beauty, durability, and uniqueness of handmade fashion,
          crafted with care for the discerning customer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:mx-16 mx-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <hr />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
