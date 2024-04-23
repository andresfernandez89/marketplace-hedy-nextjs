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

export default async function ProductId() {
  const product = await getProductById(5);
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
        <div className="flex flex-row font-normal text-gray-700 dark:text-gray-400">
          <p className="mr-1 text-base">{product.rating.rate}</p>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`ms-1 h-4 w-4 ${
                  product.rating.rate > star
                    ? "text-[#3b82f6]"
                    : "stroke-[#94a3b8] text-[#020817]"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
        </div>
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
