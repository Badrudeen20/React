import React, { useState } from 'react';
import Counter from '../components/Counter';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment, decrement } from "../store/slices/counter";

const StorePage: React.FC = () => {
      const count = useAppSelector((state) => state.counter);
      const dispatch = useAppDispatch();
    
    return (
        <>
          <button onClick={() => dispatch(increment())}>Increment</button>
            <Counter />
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    );
};

export default StorePage;