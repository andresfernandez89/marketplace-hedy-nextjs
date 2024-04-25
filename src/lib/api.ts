import { IProduct } from "@/types/Api";

const getApiUrl = async (path: string) => {
  const response = await fetch(`https://fakestoreapi.com/${path}`);
  return response.json();
};

export async function getAllProducts(): Promise<IProduct[]> {
  return await getApiUrl("products");
}
export async function getProductById(id: number): Promise<IProduct> {
  return await getApiUrl(`products/${id}`);
}
// This function returns a Promise that resolves to an IProduct after a delay.
export async function getProductByIdWithDelay(id: number): Promise<IProduct> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const product = await getProductById(id);
      resolve(product);
    }, 3000);
  });
}
