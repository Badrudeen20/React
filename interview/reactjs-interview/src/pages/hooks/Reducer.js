import React, { useReducer, useRef, useState } from 'react'
function reducer(state,action){
      switch(action.type){
        case 'Add':
            return {list:[...state.list,action.list]} 
        case 'Remove':
            const filterList  = state.list.filter(ele=>ele.id!==action.listId)
            return {list:filterList}
        default:
            return state
      }

}
export default function Reducer() {
 const input = useRef('')
 const [state,dispatch] = useReducer(reducer,{list:[]})
  function handleSubmit(e){
      e.preventDefault()
      dispatch({type:'Add',list:{id:Date.now(),name:input.current.value}})
      input.current.value = ''
  }
  function handleRemove(id){
      
      dispatch({type:'Remove',listId:id})
      
  }
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' className='form-control' ref={input} />
      <button className='btn' type='submit'>Submit</button>
    </form>
    <ul>
      {state.list?.map((ele)=>{
            return <li key={ele.id}>{ele.name} <button onClick={()=>handleRemove(ele.id)}>Remove</button></li>
      })}
    </ul>
     
    </>
  )
}
