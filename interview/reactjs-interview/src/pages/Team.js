import React from 'react'
import { useSelector } from 'react-redux';
import Form from '../components/Form';

export default function Team() {
  
  const todos = useSelector((state) => state.todos);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Todo List</div>  
        <Form />   
      </div>
      <div className="px-6 pt-4 pb-2">
      <ul role="list" className="divide-y divide-gray-100">
      {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between gap-x-6 py-1 px-2 border-2">
            <p className="text-sm font-semibold leading-6 text-gray-900 p-0">{todo.text}</p>
          </li>
        ))}
        
      </ul>
      </div>
    </div>
  )
}
