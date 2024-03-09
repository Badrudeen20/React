import React, { useEffect, useRef, useState } from 'react'
import "./Clock.css"
export default function Clock() {
  const hour = useRef(null)
  const min = useRef(null)
  const sec = useRef(null)
  /* const [hour,setHour] = useState(0)
  const [min,setMin] = useState(0)
  const [sec,setSec] = useState(0) */
  useEffect(()=>{
      const interval = setInterval(()=>{
            const currentDateTime = new Date();
            let h= currentDateTime.getHours()
            let m= currentDateTime.getMinutes()
            let s= currentDateTime.getSeconds()

            hour.current.innerText = h < 10 ? '0'+h:h 
            min.current.innerText = m < 10 ? '0'+m:m 
            sec.current.innerText = s < 10 ? '0'+s:s 
      },100)
      return () => clearInterval(interval);
  },[])
  return (
    <>
    <div className='clock-container'>
      
            <div className="timer">
			<span className="digits" ref={hour}>
				00
			</span>
                  :
			<span className="digits" ref={min}>
				00
			</span>
                  :
			<span className="digits mili-sec" ref={sec}>
				00
			</span>
		</div>
      
    </div>
    </>
  )
}
