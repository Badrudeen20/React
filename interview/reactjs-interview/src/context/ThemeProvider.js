import React, { useState } from 'react'
export const ThemeContext = React.createContext(null)
export function ThemeProvider({children}) {
  const [toggle,setToggle] = useState(false) 
  const themeToggle = ()=>{
      setToggle(pre=>!pre)
  }
  return (
    <ThemeContext.Provider value={{toggle,themeToggle}}>
      {children}
    </ThemeContext.Provider>
  )
}
