import React from "react";
import { Link } from "react-router-dom";

const PRODUCT = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum pariatur fugit aliquam quaerat, culpa ratione libero expedita praesentium quidem!",
  },
  {
    id: 2,
    title: "Mango",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum pariatur fugit aliquam quaerat, culpa ratione libero expedita praesentium quidem!",
  },
  {
    id: 3,
    title: "Banana",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum pariatur fugit aliquam quaerat, culpa ratione libero expedita praesentium quidem!",
  },
];

const Products = () => {
  return (
    <div className="mx-auto w-[40%]">
      {/* <h1 className="mt-5 text-2xl font-semibold text-blue-400">
        I am Products page
      </h1> */}
      {PRODUCT.map((product) => (
        <Link key={product.id} to={`/product/${product.title}`}>
          <div
            className="bg-blue-300 mb-4 px-4 py-2 rounded-lg cursor-pointer"
            
          >
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
