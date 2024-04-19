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

export default async function ProductId() {
  const product = await getProductById(1);
  return (
    <Card className="mx-auto my-10 max-w-xs">
      <Image
        className="w-full rounded-t-lg object-contain"
        height={293}
        width={221}
        src={product.image}
        alt={product.title}
      />
      <CardHeader>{product.title}</CardHeader>
      <CardContent className="px-5">
        <div className="flex flex-row font-normal text-gray-700 dark:text-gray-400">
          <p className="mr-1 text-base">{product.rating.rate}</p>
          <div className="flex items-center">
            <svg
              className="ms-1 h-4 w-4 text-[#3b82f6]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="ms-1 h-4 w-4 text-[#3b82f6]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="ms-1 h-4 w-4 text-[#3b82f6]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>

            <svg
              className="ms-1 h-4 w-4 stroke-[#94a3b8] text-[#3b82f6] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 20"
            >
              <defs>
                <linearGradient
                  id="half-fill-gradient"
                  x1="0%"
                  x2="90%"
                  y1="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="90%" stop-color="#3b82f6" />
                  <stop offset="90%" stop-color="transparent" />
                  <stop offset="100%" stop-color="transparent" />
                </linearGradient>
              </defs>
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                fill="url(#half-fill-gradient)"
              />
            </svg>
            <svg
              className="ms-1 h-4 w-4 stroke-[#94a3b8]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <p className="mb-3 text-sm font-light text-blue-100">
          {capitalizeFirstLetter(product.category)}
        </p>
        <CardDescription>
          {capitalizeFirstLetter(product.description)}
        </CardDescription>

        <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white" />
          <p className="my-4 text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Button
              className="w-9 text-base font-bold"
              size="sm"
              variant="outline"
            >
              -
            </Button>
            <span className="font-bold text-gray-900 dark:text-white">0</span>
            <Button
              className="w-9 text-base font-bold"
              size="sm"
              variant="outline"
            >
              +
            </Button>
          </div>
          <Button size="sm">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}
