import React, { useMemo, useState } from 'react'

export default function Memo() {
      const [number,setNumber] = useState(0);
      const [dark,setDark] = useState(false)
      const doubleNum = useMemo(()=>{
       return slowFun(number)
      },[number])
      
      const themeStyle = {
             backgroundColor:dark?'red':'white',
      }
  return (
    <>
      <input type='number'value={number} 
      onChange={(e)=>setNumber(parseInt(e.target.value))} />
      <button className='btn btn-primary'
      onClick={()=>setDark((pre) => !pre)}
      >Change Theme</button>
      <div className='container border p-5' style={themeStyle}>
           {doubleNum}
      </div>
    </>
  )
}

function slowFun(num){
      for (let i = 0; i < 100000000; i++) {}
      return num * 2
}
