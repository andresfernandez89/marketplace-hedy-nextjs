//import ProductId from "./[idProduct]/page";
import HomeHero from "@/components/HomeHero";
import CategoriesBar from "@/components/CategoriesBar";
import ProductsGrid from "@/components/ProductsGrid";

export default function Home() {
  return (
    <main className="main-home">
      <HomeHero />
      <CategoriesBar />
      <ProductsGrid />
    </main>
  );
}
