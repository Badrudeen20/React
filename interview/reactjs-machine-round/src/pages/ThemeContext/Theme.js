import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'

export default function Theme() {
  const {changeTheme} = useContext(ThemeContext)
  return (
    <>
       <button className='btn btn-danger' onClick={changeTheme}>Change Theme</button>
    </>
  )
}
