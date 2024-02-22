"use client"

export type UpdateList = {
  id:string
  title?:string
  complete?:boolean
  type:string
}

// type TodoListProps = {
//   id: string
//   title: string
//   complete: boolean
//   toggleTodo: (id: string, complete: boolean) => void
// }
type TodoListProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: ({ id, title, complete,type }:UpdateList) => void
}

export function TodoList({ id, title, complete, toggleTodo }: TodoListProps) {
  return (
    <li className="flex gap-1 items-center justify-between">
      <div className="flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          /* onChange={(e) => toggleTodo(id, e.target.checked)} */
          onChange={(e) => toggleTodo({id:id,title:title,complete:e.target.checked,type:'STATUS'})}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
      <button onClick={()=>toggleTodo({id:id,title:title,type:'DELETE'})} className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-red-400 focus-within:bg-red-400 outline-none">
        Delete
      </button>
    </li>
  )
}