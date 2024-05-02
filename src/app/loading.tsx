import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <div className="mx-4 w-full rounded-lg border md:flex md:max-w-4xl">
      <div className="w-full md:max-h-80 md:w-full">
        <Skeleton className="h-[275px] w-full" />
      </div>
      <div className="w-full flex-col p-1 max-md:pt-5 md:flex md:justify-between md:pl-3 md:pr-1">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-2 h-40" />
        <div className="flex w-full flex-col items-end md:justify-end">
          <Skeleton className="mt-2 h-6 w-20" />
          <Skeleton className="mt-2 h-6 w-32" />
        </div>
      </div>
    </div>
  );
}
