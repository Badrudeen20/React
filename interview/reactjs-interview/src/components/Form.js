import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todo';
export default function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };
  return (
    <>
     <form onSubmit={addTodoHandler}>
        <div className="mb-4">
            <input value={text} onChange={(e) => setText(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Item" />
        </div>
     </form>
      
    </>
  )
}
