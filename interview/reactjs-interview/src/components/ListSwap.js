import React, { useRef } from 'react'
const LISTA = ['Test 1','Test 2','Test 3']
const LISTB = ['Test A','Test B','Test C']
export default function ListSwap() {
  const listA =  useRef([])
  const listB =  useRef([])
  function handleCheckbox(index){
      const temp = listB.current[index].textContent
      listB.current[index].textContent  =  listA.current[index].textContent
      listA.current[index].textContent = temp
  }
  return (
    <>
    <ul className="list-disc">
      {LISTA.map((ele,ind)=>{
            return  <li key={ind}>
                     <div className="container mx-auto">
                        <input type='checkbox' onChange={()=>handleCheckbox(ind)}  value={ele} />
                        <label ref={(input)=>listA.current[ind]=input}>{ele}</label>
                     </div>
                    </li> 
      })}
     
   </ul>
   <div>--------------------------------</div>
    <ul className="list-disc">
      {LISTB.map((ele,ind)=>(
              <li key={ind}>
                  <div className="container mx-auto">
                    <input type='checkbox'  value={ele} />
                    <label ref={(input)=>listB.current[ind]=input}>{ele}</label>
                  </div>
              </li> 
      ))}
     
   </ul>
    </>
  )
}
