import React from "react";
import ProductCard from "./ProductCard";

const ProductsListing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full p-[5%]">
      <h1 className="text-4xl font-semibold pb-4">Featured Products</h1>
      <div className="flex flex-wrap gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsListing;
