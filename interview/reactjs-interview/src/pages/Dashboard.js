import React from 'react'
import { useEffect, useState } from "react";
import useThrottle from "../hooks/Throttle";
export default function Dashboard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const throttledHandleResize = useThrottle(handleResize, 1000);
    
/*   useEffect(() => {
    console.log(throttledHandleResize)
    window.addEventListener("resize", throttledHandleResize);
    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []); */
  return (
    <div>Dashboard</div>
  )
}
