import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mt-[250px] flex w-full flex-col items-center justify-center align-bottom">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <div className="absolute rotate-12 rounded bg-[#7f1d1d] px-2 text-sm">
        Page Not Found
      </div>
      <Link href="/">
        <Button className="mt-5" variant={"destructive"}>
          Go Home
        </Button>
      </Link>
    </main>
  );
}
