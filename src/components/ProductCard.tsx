import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import styles from "../styles/cardProduct.module.css";
import { capitalizeFirstLetter } from "@/lib/utils";
import Rating from "../components/Rating";
import { IProduct } from "@/types/Api";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className={styles.cardImage}
        />
        <div className={styles.cardDescription}>
          <p>{product.title}</p>
          <div className={styles.addCart}>
            <Rating rate={product.rating.rate} />
          </div>
          <div className={styles.cardInformation}>
            <p>{capitalizeFirstLetter(product.category)}</p>
            <p>${product.price}</p>
          </div>
          <Link href={`/${product.id}`} className={styles.link}>
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
