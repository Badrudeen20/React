import React from 'react'
import useCounter from '../useCounter'
export default function Custom() {
  const { count, increment, decrement, reset } = useCounter(0, 2);
  return (
    <div>
       <h2>Counter: {count}</h2>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={reset}>Reset</button>
    </div>
  )
}