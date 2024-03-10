import { wait } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'

export default function InputForm() {
  const [search,setSearch] = useState('')
  useEffect(()=>{
      const interval = setTimeout(async ()=>{
            const response = await fetch('https://dummyjson.com/products')
            const json = await response.json()
            console.log(json)
      },2000)   
      return ()=> clearTimeout(interval)
  },[search])
  
  return (
    <>
       <form className='container w-50'>
            <div className='form-group'>
                  <label className='form-label'>Search List</label>
                  <input className='form-control' value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>
       </form>
    </>
  )
}
