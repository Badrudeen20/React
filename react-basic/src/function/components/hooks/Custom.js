import React from 'react'
import useCounter from '../custom/useCounter'
import useToggle from '../custom/useToggle';
import { useLocalStorage } from '../custom/useStorage';
export default function Custom() {
  const { count, increment, decrement, reset } = useCounter(0, 2);
  const [value,toggleValue] = useToggle(false)
  // const [name, setName, removeName] = useSessionStorage("name", "Kyle")
  const [age, setAge, removeAge] = useLocalStorage("age", 26)
  return (
    <>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Counter: {count}</h5>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
              </div>
            </div>
          </div>


          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Counter: {value.toString()}</h5>
                <button onClick={toggleValue}>Toggle</button>
                <button onClick={() => toggleValue(true)}>Make True</button>
                <button onClick={() => toggleValue(false)}>Make False</button>
              </div>
            </div>
          </div>


          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Storage: {age}</h5>
                <button onClick={() => setAge(40)}>Set Age</button>
                <button onClick={removeAge}>Remove Age</button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
       
    </>
  )
}
