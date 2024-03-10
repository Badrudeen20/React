import React, { useState } from 'react'
export const ThemeContext = React.createContext()
export function ThemeProvider({children}) {
  const [toggle,setToggle] = useState(false)
  function changeTheme(){
      setToggle(pre=>!pre)
  }  
  return (
    <ThemeContext.Provider value={{toggle,changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
