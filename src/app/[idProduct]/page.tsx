import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { getProductByIdWithDelay } from "@/lib/api";
import { capitalizeFirstLetter } from "@/lib/utils";
import Image from "next/image";
// +import AddToCartButton from "@/components/AddToCart";
import Rating from "@/components/Rating";
import { IProduct } from "@/types/Api";
import styles from "../../styles/cardProduct.module.css";
import Counter from "@/components/Counter";

export default async function ProductId({
  params,
}: {
  params: { idProduct: IProduct["id"] };
}) {
  const product = await getProductByIdWithDelay(params.idProduct);

  return (
    <Card className="mx-4 my-10 md:mx-auto md:flex md:max-w-4xl">
      <div className="relative bg-[#fefefe] max-md:rounded-t-lg md:max-h-80 md:w-full md:rounded-l-lg">
        <Image
          className="object-contain max-md:max-h-[275px] max-sm:rounded-t-lg"
          width={480}
          height={640}
          src={product.image}
          alt={product.title}
          priority
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <CardContent
        className={`${styles.cardContainer} flex-col max-md:pt-6 md:flex md:justify-evenly md:py-1 md:pl-3 md:pr-1`}
      >
        <CardHeader className={`${styles.cardDescription} p-0 md:py-1`}>
          {product.title}
        </CardHeader>
        <Rating rate={product.rating.rate} />
        <p
          className={`${styles.cardInformation} mb-3 text-sm font-light text-blue-100`}
        >
          {capitalizeFirstLetter(product.category)}
        </p>
        <CardDescription className={`${styles.cardInformation} md:pr-6`}>
          {capitalizeFirstLetter(product.description)}
        </CardDescription>
        <div className={styles.productFooter}>
          <div className="flex w-full items-center justify-between">
            <p className="my-3 text-end text-2xl font-bold text-gray-900 dark:text-white md:pr-2">
              ${product.price}
            </p>
            <div
              className={`${styles.cartBtn} mt-4 flex flex-col items-end md:mt-1 md:pr-2`}
            >
              {/* <AddToCartButton product={product} /> */}
              <Counter product={product} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
