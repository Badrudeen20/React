import React from 'react'
import { useState } from 'react'
const options = ['cricket','football','hockey']
const days = ['weekday','month']
export default function Base() {
  const [opt,setOpt] = useState('')
  const [day,setDay] = useState('')
  const [count,setCount] = useState(0)
  const  handleClick =()=>{
      setCount(pre=>{
        const updatedCount = pre + 1;
        console.log(updatedCount)
        return updatedCount;
      })
        
  }
  return (
      <div className='container'>
           {/*  <div className='row'>
                  <div className='col-6'>
                        <h5>Options</h5>
                        {options.map((opt,ind)=>{
                        return  <div key={ind} className='form-group'>
                                    <input type='radio' onChange={(e)=>setOpt(e.target.value)} id={opt} name='options' value={opt} />
                                    <label for={opt}>{opt}</label> 
                              </div>
                        })}

                        
                  </div>
                  <div className='col-6'>
                        <h5>Days</h5>
                        {days.map((opt,ind)=>{
                              return  <div key={ind} className='form-group'>
                                          <input type='radio' onChange={(e)=>setDay(e.target.value)} id={opt} name='days' value={opt} />
                                          <label for={opt}>{opt}</label> 
                                    </div>
                        })} 
                  </div>
            </div>
      
           <div className='text-center mt-3'>
            Options:{opt}
           </div>
           <div className='text-center mt-3'>
            Days:{day}
           </div> */}
      
         <button onClick={handleClick}>Click Me! {count}</button>
     
      </div>
  )
}
