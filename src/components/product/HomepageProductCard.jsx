const HomepageProductCard = ({ product }) => {
  // default image
  const fallbackImage =
    "https://m.media-amazon.com/images/I/81dsuNICsJL._AC_SL1500_.jpg";

  return (
    <div className="relative border rounded-lg p-2 shadow-sm hover:shadow-md transition duration-200 text-sm bg-white">
      <img
        src={product.image || fallbackImage}
        alt={product.name}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.target.src = fallbackImage;
        }}
        className="w-full h-32 object-cover rounded mb-2"
      />

      <div className="font-medium truncate">{product.name}</div>
      <div className="text-gray-600">€{product.price}</div>

      <button
        className="absolute bottom-2 right-2 bg-orange-400 hover:bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg shadow"
        aria-label="Add to cart"
      >
        +
      </button>
    </div>
  );
};

export default HomepageProductCard;
