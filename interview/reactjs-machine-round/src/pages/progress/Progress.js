import React, { useEffect, useState } from 'react'
import "./Progress.css"
const MIN = 1
const MAX = 100
export default function Progress() {
  const [success,setSucess] = useState(false)
  const [active,setActive] = useState(true)
  const [percent,setPercent] = useState(0)
  useEffect(()=>{
    let interval = null
    if(percent < 100 && active){
      interval = setInterval(()=>{
        setPercent(pre=>pre+10)
      },500)
    }else{
      if(percent > 99){
        setSucess(true)
      }
    }
    return ()=> clearInterval(interval)
  },[percent,active])

  return (
    <>
      <div className="app">
        <span>Progress Bar</span>
        <div className="progress">
        <span
          style={{
            color: percent > 49 ? "white" : "black"
          }}
        >
          {percent.toFixed()}%
        </span>
        <div
            style={{
              transform: `scaleX(${percent / MAX})`,
              transformOrigin: "left"
            }}
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={percent}
            role="progressbar"
        />
        </div>
        <span>
          {active ?success ? "Complete!" : "Loading..." :"Puse" }
         
        </span>
        <div>
          <button onClick={()=>setPercent(0)}>Restart</button>
          <button onClick={()=>setActive(pre=>!pre)}>
            {active ? 'Puse':'Resume'}
          </button>
        </div>
      </div>
    </>
  )
}
