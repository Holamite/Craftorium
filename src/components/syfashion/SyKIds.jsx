import ProductCard from "../ProductCard";
import { allSyCollection } from "../../../craftToriumData";


const SyKids = () => {

  return (
    <div className="py-10 bg-gray-100" id="kids">
      <h2 className="text-center text-4xl font-bold mb-8">
        Kids' Streetwear Collection
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
      {allSyCollection
      .filter((product) => product.category === 'kids' && product.vendors === 'syfashion')
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
  );
};

export default SyKids;
