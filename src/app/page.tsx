"use client";
import CategoriesBar from "@/components/CategoriesBar";
import HomeHero from "@/components/HomeHero";
import PaginationComponent from "@/components/PaginationComponent";
import ProductsGrid from "@/components/ProductsGrid";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const {
    products,
    totalPages,
    page,
    category,
    changeCategory,
    onNextPage,
    onPrevPage,
    setPage,
  } = useProducts();

  return (
    <main className="main-home">
      <HomeHero />
      <CategoriesBar changeCategory={changeCategory} category={category} />
      <ProductsGrid products={products} />
      <PaginationComponent
        currentPage={page}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        setPage={setPage}
      />
    </main>
  );
}
