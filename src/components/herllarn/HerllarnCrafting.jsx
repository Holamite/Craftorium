import React from "react";

const HerllarnCrafting = () => {
  return (
    <section className="relative bg-gray-50 py-10">
      <div className="container mx-auto">
        <div className="relative w-full md:h-[70vh] h-[50vh]">
          <video
            src="https://res.cloudinary.com/dxswouxj5/video/upload/v1729198714/WhatsApp_Video_2024-10-16_at_6.40.35_AM_rp2x5p.mp4"
            className="w-full h-full object-cover rounded-lg shadow-md"
            autoPlay
            loop
            muted
          ></video>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center ">
            <h2 className="text-white text-4xl font-bold mb-4 mx-4">
              Crafting Excellence
            </h2>
            <p className="text-white text-lg text-center max-w-xl mx-4">
              Herllarn handcrafting bag with dedication and precision. Using the
              finest materials, we ensure a perfect blend of style and
              durability in every piece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerllarnCrafting;
