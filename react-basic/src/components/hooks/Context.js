import React from 'react'
import { ThemeProvider } from '../../context/ThemeProvider'
import FunctionComponent from '../function/FunctionComponent'

export default function Context() {

  return (
    <ThemeProvider>
      <FunctionComponent/>
    </ThemeProvider>
  )
}
