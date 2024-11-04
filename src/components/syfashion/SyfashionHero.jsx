import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" bg-gray-100 py-16  md:py-24 md:px-32 overflow-hidden flex h-[70vh] md:gap-8 gap-2">
      {/* Text Section */}
      <div className=" max-w-lg mx-auto text-center md:text-left md:max-w-2xl pl-2">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 leading-tight mb-6">
          Elevate Your Look <br />
          <span className="text-[#92714a]">with SY Fashion</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest in fashion trends, carefully curated for modern
          elegance. Be the showstopper with every outfit.
        </p>
        <button className="bg-[#92714a] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#93816b] transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="border border-[#92714a] rounded-l-full ">
        <Image
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729428896/stylish-adult-woman-holding-shopping-bags-with-copy-space-removebg-preview_yt2d8y.png"
          alt="SY Fashion Model"
          priority
          width={200}
          height={200}
          className="md:h-[400px] h-[200px] w-[400px] md:w-[800px] md:object-contain object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
