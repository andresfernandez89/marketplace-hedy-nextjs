"use client";
import { useState, useEffect, Suspense } from "react";
import HomeHero from "@/components/HomeHero";
import CategoriesBar from "@/components/CategoriesBar";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import PaginationComponent from "@/components/PaginationComponent";
import Loading from "./loading";

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
  const totalPages = Math.ceil(products.length / perPage);

  useEffect(() => {
    fetchProducts();
  }, [category, page]);

  const fetchProducts = async () => {
    let url: string = "https://fakestoreapi.com/products";
    if (category !== "all") {
      url += `/category/${category}`;
      console.log(url);
    }

    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
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
      <CategoriesBar changeCategory={changeCategory} category={category} />
      <ProductsGrid products={currentPageProducts} />
      <PaginationComponent
        currentPage={page}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </main>
  );
}
