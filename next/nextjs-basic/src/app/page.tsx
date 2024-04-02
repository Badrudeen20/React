import Link from "next/link"
import { prisma } from "@/db"
import { TodoList,UpdateList } from "@/components/TodoList";
import Navbar from "@/components/Navbar";


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
 
  //const todos = await getTodos()
  return (
  <>
     {/* <Navbar /> */}
     Hello
   
  </>
  );
}
