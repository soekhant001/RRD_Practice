import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate("/products")
  }
  return (
    <div className="mx-auto w-[60%]">
      <h1 className="mt-5 text-2xl font-semibold text-blue-400">
        I am ProductDetail page
      </h1>
      <h1 className="font-bold text-2xl">Product title - {title}</h1>
      <button
        className="px-4 py-2 border rounded-lg border-black"
        onClick={navigateHandler}
      >
        Go back to product
      </button>
    </div>
  );
};

export default ProductDetail;
