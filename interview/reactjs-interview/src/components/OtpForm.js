import React, { useEffect, useRef, useState } from 'react'
const OTP_INPUTS_LENGTH = 4
export default function OtpForm() {
  const [otp,setOtp] = useState(new Array(OTP_INPUTS_LENGTH).fill(""))
  const inputRef =  useRef([])
  useEffect(()=>{
    inputRef.current[0].focus()
  },[])
  function handleChange(ind){
      const value = inputRef.current[ind].value
      if(value){
            otp[ind] = value.substring(value.length - 1)
            if(inputRef.current[ind] && ind < (otp.length-1)){
                for (let i = 0; i < inputRef.current.length; i++) {
                  if(i > ind){
                        if(inputRef.current[i].value==''){
                              inputRef.current[i].focus()   
                              break;
                        }
                  }
                }
               
            }
      }else{
            otp[ind] = value.substring(value.length - 1)
            if(inputRef.current[ind] && ind > 0){
                inputRef.current[ind-1].focus()
                for (let i = 0; i < inputRef.current.length; i++) {
                  if(i < ind){
                        if(inputRef.current[i].value==''){
                              inputRef.current[i].focus()   
                              break;
                        }
                  }
                }
            }
      }  
      
      setOtp([...otp])
  }
  
  return (
    <>
      <form className="max-w-sm mx-auto">
            <label for="otp" className="block mb-2 mx-10 text-center font-medium text-gray-900 dark:text-white">Enter OTP</label>
            <div className="mb-5 mx-10 grid grid-cols-4 gap-4">
                  {otp.map((ele,ind)=>(
                        <input type="number" value={ele}
                         onChange={()=>handleChange(ind)}
                         ref={(input)=>inputRef.current[ind]=input} id={`otp`+ind} key={ind} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                  ))}   
            </div>
      </form>
    </>
  )
}
