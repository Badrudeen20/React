import React, { useEffect, useState, useTransition } from 'react'

export default function Transition() {
  const [isPending,startTransition] =  useTransition()
  const [value,setValue]  = useState('')
  const [list,setList] = useState([])
  const SIZE = 20000;
  
  function handleChange(e){
      setValue(e.target.value)
      startTransition(()=>{
        const l = []
        for (let i = 0; i < SIZE; i++) {
              l.push(e.target.value)
        }
        setList(l)
      })  
  }
  
  return (
    <>
      <div className='container'>
        <input type='text' value={value} onChange={handleChange} className='form-control' />
        {!isPending ? list.map((l,i)=>(
            <div key={i}> {l}</div>
        )) :'Loading...'}
      </div>
    </>
  )
}
