"use client";
import { useState, useEffect } from "react";
import HomeHero from "@/components/HomeHero";
import CategoriesBar from "@/components/CategoriesBar";
import ProductsGrid from "@/components/ProductsGrid";
import PaginationComponent from "@/components/PaginationComponent";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);
  const totalPages = Math.ceil(products.length / perPage);

  useEffect(() => {
    fetchProducts();
  }, [category, page]);

  const fetchProducts = async () => {
    let url: string = "https://fakestoreapi.com/products";
    if (category !== "all") {
      setLoading(true);
      url += `/category/${category}`;
      console.log(url);
    }
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  const changeCategory = (newCategory: string) => {
    setCategory(newCategory);
    setPage(1);
  };

  const onNextPage = () => {
    setPage(page + 1);
  };

  const onPrevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  const startIndex: number = (page - 1) * perPage;
  const endIndex: number = startIndex + perPage;
  const currentPageProducts = products.slice(startIndex, endIndex);

  return (
    <main className="main-home">
      <HomeHero />
      <CategoriesBar changeCategory={changeCategory} />
      {loading ? (
        <div className="flex h-screen items-center justify-center text-center font-extrabold">
          <img
            src="loading-svg.svg"
            className="... mr-3 h-5 w-5 animate-spin bg-slate-300 text-slate-300"
          />
          Loading...
        </div>
      ) : (
        <>
          <ProductsGrid products={currentPageProducts} />
          <PaginationComponent
            currentPage={page}
            totalPages={totalPages}
            onNextPage={onNextPage}
            onPrevPage={onPrevPage}
          />
        </>
      )}
    </main>
  );
}
