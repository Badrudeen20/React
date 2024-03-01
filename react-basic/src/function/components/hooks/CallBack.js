import React, { useCallback, useState } from 'react'
import ThemeList from '../ThemeList';

export default function CallBack() {
      const [number,setNumber] = useState(0);
      const [dark,setDark] = useState(false)
      const themeStyle = {
            backgroundColor:dark?'red':'white',
     }
     const getItem = useCallback(()=>{
      return [number,number+1,number+2]
     },[number])
      return (
    <>
      <div style={themeStyle}>
            <input type='number'value={number} 
            onChange={(e)=>setNumber(parseInt(e.target.value))} />
            <button className='btn btn-primary'
            onClick={()=>setDark((pre) => !pre)}
            >Change Theme</button>
            <ThemeList num={getItem}/>
      </div>
    </>
  )
}
