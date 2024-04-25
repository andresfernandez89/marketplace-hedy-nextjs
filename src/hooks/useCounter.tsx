import { useState } from "react";
import { type IUseCounterResult } from "@/types/Counter";

export default function useCounter(): IUseCounterResult {
  const [count, setCount] = useState<number>(0);

  const handleIncrement: () => void = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement: () => void = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, handleDecrement, handleIncrement };
}
