import React from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="mt-2 p-4 border rounded bg-white shadow text-sm w-full max-w-xs space-y-1">
      <div className="font-semibold break-words text-gray-900">
        {product.name}
      </div>
      <div className="text-gray-600 break-words">{product.description}</div>
      {product.link && (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline inline-block mt-2"
        >
          View Product
        </a>
      )}
    </div>
  );
};

export default ProductCard;
