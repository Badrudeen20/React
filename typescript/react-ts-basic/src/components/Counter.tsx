import React from "react";
import { useAppSelector } from "../store/hooks";

const Counter: React.FC = () => {
  const count = useAppSelector((s) => s.counter);

  return <h1>MyCom: {count}</h1>;
};

export default Counter;