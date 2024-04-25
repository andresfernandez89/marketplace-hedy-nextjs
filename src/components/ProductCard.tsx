import { Product } from "@/app/page";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex h-96 w-[250px] flex-col  items-center justify-between rounded-xl border bg-blue-950 pt-0 text-center shadow-md transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105">
        <img
          src={product.image}
          alt={product.title}
          className="mt-0 h-[250px] w-[250px] shrink grow-0 rounded-t-xl shadow-sm"
        />
        <h3>{product.title}</h3>
        <p className="w-full rounded-b-xl bg-slate-300 pb-2 pl-4 pt-2 text-left font-extrabold text-blue-950">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
