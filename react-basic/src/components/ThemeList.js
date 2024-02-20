import React, { useEffect, useState } from 'react'

export default function ThemeList({num}) {
  const [items,setItems] = useState([])
  useEffect(()=>{
    setItems(num())
    console.log('Update')
  },[items])
      return (
    <div>
      {items.map(i=>{
            return <div key={i}>{i}</div>
      })}
    </div>
  )
}
