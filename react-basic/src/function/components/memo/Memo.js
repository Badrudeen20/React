import React, { useState } from 'react'
import Header from './Header'

export default function Memo() {
  const [title,setTitle] = useState('')
  return (
    <>
      <input className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)} />
      <Header name="badru" />
    </>
  )
}
