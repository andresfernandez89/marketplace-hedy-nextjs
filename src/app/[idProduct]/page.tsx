import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProductById } from "@/lib/api";
import { capitalizeFirstLetter } from "@/lib/utils";
import Counter from "@/components/counter";
import Rating from "@/components/rating";

export default async function ProductId() {
  const product = await getProductById(2);
  return (
    <Card className="mx-4 my-10 md:mx-auto md:flex md:max-w-4xl ">
      <div className="relative bg-[#fefefe]  max-md:rounded-t-lg md:max-h-80 md:w-full md:rounded-l-lg ">
        <Image
          className="object-contain max-md:max-h-[275px] max-sm:rounded-t-lg"
          width={480}
          height={640}
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <CardContent className="flex-col max-md:pt-6 md:flex md:justify-evenly md:py-1 md:pl-3 md:pr-1">
        <CardHeader className="p-0 md:py-1">{product.title}</CardHeader>
        <Rating rate={product.rating.rate} />
        <p className="mb-3 text-sm font-light text-blue-100">
          {capitalizeFirstLetter(product.category)}
        </p>
        <CardDescription className="md:pr-6">
          {capitalizeFirstLetter(product.description)}
        </CardDescription>
        <p className="my-3 text-end text-2xl font-bold text-gray-900 dark:text-white md:pr-2">
          ${product.price}
        </p>
        <div className="mt-4 flex flex-col items-end md:mt-1 md:justify-end md:pr-2">
          <Counter />
          <Button className="mt-1 w-full md:ml-2" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
