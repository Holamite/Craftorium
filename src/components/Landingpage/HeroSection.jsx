"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729191929/3a15eb93-205b-4771-807e-9caab3475c72_rsnwye.jpg",
    },
    {
      id: 2,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157443/1b4cb35a-8846-438e-a3e7-5250fe6de101_iagpb0.jpg",
    },
    {
      id: 3,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157313/48d390d5-e67a-45c2-982f-3e13f32e8b16_d8qn1n.jpg",
    },
    {
      id: 4,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729191950/93088736-d7ee-48b6-950b-dfcd97460054_onxjur.jpg",
    },
    {
      id: 5,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729158976/d455cd6a-614a-49ec-b7f7-8de00748e24e_epyeny.jpg",
    },
    {
      id: 6,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157428/49c4aae5-12d7-4bc4-8da5-f94edc696ab1_wrbgvj.jpg",
    },
    {
      id: 7,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729188318/b45950b6-3eb1-45e0-9ac5-32163d9e41b5_fppnht.jpg",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden bg-black">
      {/* Slide container */}
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[400px]  flex items-center justify-center relative"
          >
            <Image
              src={slide.imageUrl}
              alt="slider image"
              width={200}
              height={200}
              className="w-full h-full object-contain"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
          </div>
        ))}
      </div>

      {/* Next/Prev buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8250;
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
