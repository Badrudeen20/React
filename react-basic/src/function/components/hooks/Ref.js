import React, { useEffect, useRef, useState } from 'react'

export default function Ref() {
  const [name,setName] = useState('')
  const renderCount = useRef(1)
  const prevValue = useRef('')

  useEffect(()=>{
      renderCount.current = renderCount.current + 1
      prevValue.current = name
  })
 
  return (
    <div>
      <input className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
      <div>I Rendered {renderCount.current}</div>
      <div>My Previous Value {prevValue.current}</div>
    </div>
  )
}
