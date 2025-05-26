import { MOCK_PRODUCTS } from "@/constants/products";
import HomepageProductCard from "@/components/product/HomepageProductCard";
import ProductCategoryNavbar from "@/components/product/ProductCategoryNavbar";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const isCategoryPage = Boolean(category);

  const recommended = MOCK_PRODUCTS.filter((p) =>
    p.tags?.includes("recommended")
  );
  const bestseller = MOCK_PRODUCTS.filter((p) =>
    p.tags?.includes("bestseller")
  );
  const suggested = MOCK_PRODUCTS.filter((p) => p.tags?.includes("suggested"));
  const categoryProducts = MOCK_PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="p-4 space-y-10 mt-12">
      {/* cate navbar */}
      <ProductCategoryNavbar />

      {isCategoryPage ? (
        <ProductSection
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          products={categoryProducts}
        />
      ) : (
        <>
          <ProductSection title="Recommended Products" products={recommended} />
          <ProductSection title="Best Sellers" products={bestseller} />
          <ProductSection title="You May Also Like" products={suggested} />
        </>
      )}
    </div>
  );
};

const ProductSection = ({ title, products }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <HomepageProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Products;
