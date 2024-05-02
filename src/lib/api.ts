import { IProduct } from "@/types/Api";

const getApiUrl = async (path: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}${path}`);
  return response.json();
};

export async function getAllProducts(): Promise<IProduct[]> {
  return await getApiUrl("products");
}
export async function getProductById(id: IProduct["id"]): Promise<IProduct> {
  return await getApiUrl(`products/${id}`);
}
// This function returns a Promise that resolves to an IProduct after a delay.
export async function getProductByIdWithDelay(
  id: IProduct["id"],
): Promise<IProduct> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const product = await getProductById(id);
      resolve(product);
    }, 2000);
  });
}

export async function getProductsByCategory(
  category: IProduct["category"],
): Promise<IProduct[]> {
  console.log(category);
  return await getApiUrl(`products/category/${category}`);
}
