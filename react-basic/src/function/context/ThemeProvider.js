import React, { useState } from 'react'

export const ThemeContext = React.createContext()
export function ThemeProvider({children}) {
      const [theme,setTheme] = useState(true)
     
  return (
    <ThemeContext.Provider value={{
      theme,setTheme
    }}>
       {children}
    </ThemeContext.Provider>
  )
}
