// useCounter.js
import { useState } from 'react';

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  // Decrement the counter
  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  // Reset the counter to the initial value
  const reset = () => {
    setCount(initialValue);
  };

  // Return the state and functions to manipulate the counter
  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;