import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
       case 'increment':
            return {count:state.count+1}
       case 'decrement':
            return {count:state.count-1}
       default:
            return state
    }
}

export default function Reducer() {
  const [state,dispatch] = useReducer(reducer,{count:0})
  function counterFun(type){
       dispatch({type:type})
  }
  return (
    <>
      <button className='btn btn-primary' onClick={()=>counterFun('increment')}>Add</button>
      <span>{state.count}</span>
      <button className='btn btn-danger' onClick={()=>counterFun('decrement')}>Remove</button>
    
    </>
  )
}
