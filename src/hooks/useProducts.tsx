import { getAllProducts, getProductsByCategory } from "@/lib/api";
import { IProduct } from "@/types/Api";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(6);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category !== "all") {
        const productsCategory = await getProductsByCategory(category);
        setProducts(productsCategory);
        return;
      }
      const productsAll = await getAllProducts();
      setProducts(productsAll);
    };
    fetchProducts();
  }, [category, page]);

  const totalPages = Math.ceil(products.length / perPage);

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

  return {
    products: currentPageProducts,
    totalPages,
    page,
    category,
    changeCategory,
    onNextPage,
    onPrevPage,
    setPage,
  };
};

export default useProducts;
