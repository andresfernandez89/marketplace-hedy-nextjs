"use client";
import { Button } from "@/components/ui/button";
import useCounter from "@/hooks/useCounter";
import { type IUseCounterResult } from "@/types/Counter";

export default function Counter() {
  const { count, handleDecrement, handleIncrement }: IUseCounterResult =
    useCounter();

  return (
    <div className="flex items-center gap-x-2 py-2">
      <Button
        className="w-9 text-base font-bold"
        size="sm"
        variant="outline"
        onClick={handleDecrement}
        disabled={count <= 0}
      >
        -
      </Button>
      <span className="font-bold text-gray-900 dark:text-white">{count}</span>
      <Button
        className="w-9 text-base font-bold"
        size="sm"
        variant="outline"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
}
