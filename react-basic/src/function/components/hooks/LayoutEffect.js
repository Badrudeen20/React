import React, { useLayoutEffect,useEffect, useRef, useState } from 'react'

export default function LayoutEffect() {
  const [show,setShow] = useState(false)
  const popup = useRef()
  const button = useRef()
  useLayoutEffect(()=>{
    if(popup.current == null || button.current==null) return
    const {bottom} = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom+105}px`
  },[show])
  return (
    <>
     <button className='btn btn-primary' onClick={()=>setShow(pre=>!pre)} ref={button}>Click</button>
     {show &&
      <div className='container' style={{position:'absolute'}} ref={popup}>
        Container
      </div>}
    
    </>
  )
}
