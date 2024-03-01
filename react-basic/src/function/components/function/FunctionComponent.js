import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
export default function FunctionComponent() {
  const {theme,setTheme} = useContext(ThemeContext)
  
  const themeStyle = {
    'background':theme?'blue':'green'
  }
  return (
    <div className='container p-3' style={themeStyle}>
        <button className='btn' onClick={()=>setTheme(pre=>!pre)}>Change</button>
    </div>
  )
}
