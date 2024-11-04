import React from "react";
import ProductCard from "../ProductCard";
import { allSyCollection } from "../../../craftToriumData";

const MenCollection = () => {
  return (
    <section id="men" className="py-10 md:mx-16 mx-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Men's Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {allSyCollection
          .filter((product) => product.category === 'male' && product.vendors === 'herllarn')
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenCollection;
