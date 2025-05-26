import { useNavigate, useSearchParams } from "react-router-dom";
import { MOCK_PRODUCTS } from "@/constants/products";

const ProductCategoryNavbar = () => {
  const [searchParams] = useSearchParams();
  const current = searchParams.get("category");
  const navigate = useNavigate();

  // get the categories from the mock data
  const categories = Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category)));

  return (
    <div className="flex flex-wrap gap-3 px-2 py-2 text-sm border-b mb-6">
      {/* All Products button */}
      <button
        onClick={() => navigate("/products")}
        className={`capitalize px-3 py-1 rounded ${
          !current
            ? "bg-green-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All Products
      </button>

      {/* each cate button */}
      {categories.map((cat) => {
        const isActive = cat === current;
        return (
          <button
            key={cat}
            onClick={() => navigate(`/products?category=${cat}`)}
            className={`capitalize px-3 py-1 rounded ${
              isActive
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default ProductCategoryNavbar;
