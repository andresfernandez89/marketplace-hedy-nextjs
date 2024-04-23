import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement: () => void = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement: () => void = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, handleDecrement, handleIncrement };
}
