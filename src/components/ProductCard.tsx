import { Product } from "@/app/page";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="flex h-96 w-[250px] flex-col  items-center justify-between rounded-xl border  pt-0 text-center shadow-md transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105">
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={250}
          className="mt-0 h-[250px] w-[250px] shrink grow-0 rounded-t-xl shadow-sm"
        />
        <CardDescription className="p-4">{product.title}</CardDescription>
        <CardFooter>
          <p className="font-medium">${product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
