import Link from "next/link"
import { prisma } from "@/db"
import { TodoList,UpdateList } from "@/components/TodoList";


function getTodos() {
  return prisma.todo.findMany()
}

/* async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where: { id }, data: { complete } })
} */
async function toggleTodo({ id, title, complete,type }:UpdateList) {
  "use server"
 
  if(type=='STATUS'){
    await prisma.todo.update({ where: { id }, data: { complete } })
  }else if(type=='DELETE'){
    await prisma.todo.delete({ where: { id } })
  }
  
}


export default async function Home() {
 
  const todos = await getTodos()
  return (
  <>
     <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todo List</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/add"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoList key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
  </>
  );
}
