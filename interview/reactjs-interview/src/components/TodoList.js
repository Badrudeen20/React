import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/Debounce'
const LIMIT = 10

export default function TodoList() {
  const [data,setData] = useState([]) 
  const [page,setPage] = useState(1)
  const [list,setList] = useState([])
  useEffect(()=>{
      const abortController = new AbortController();
      const signal = abortController.signal;
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=100')
      .then((response) => response.json())
      .then((data) => {
            setData(data);
            setList(data)
      })
      .catch((err) => {
         console.log(err.message);
      });
      return () => abortController.abort();
  },[])


  // Debounce function to delay the execution of the callback
  const debounce = (func, delay) => {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
      //     func.apply(this, args);
          func(...args);
        }, delay);
      };
  };

  //Throttle function to delay the execution of the callback
  const throttle = (func, delay = 1000)=> {
      let shouldWait = false
      let waitingArgs
      const timeoutFunc = () => {
        if (waitingArgs == null) {
          shouldWait = false
        } else {
          func(...waitingArgs)
          waitingArgs = null
          setTimeout(timeoutFunc, delay)
        }
      }
    
      return function(...args) {
        if (shouldWait) {
          waitingArgs = args
          return
        }
    
        func(...args)
        shouldWait = true
        setTimeout(timeoutFunc, delay)
      }
   }
    

  // Debounced version of the input handler
  const handleDebounceChange = debounce((value) => {
      setList(data.filter(item=>item['title'].toLowerCase().includes(value.toLowerCase())))    
  }, 5000);

  // Throttle version of the input handler
  const handleThrottleChange = throttle((value) => {
      setList(data.filter(item=>item['title'].toLowerCase().includes(value.toLowerCase())))   
     
  }, 5000);

  const selectPageHandler = (selectedPage) => {
      if (selectedPage >= 1 && selectedPage <= list.length) {
        setPage(selectedPage)
      } 
  }
 
  function handleInput(e){
      let search = e.target.value
    /*   handleDebounceChange(search) */
      handleThrottleChange(search)
  }

  return (
    <>
      <div className="w-full ">
            <form className="bg-white rounded px-8 pt-6 mb-4">
                  <div className="mb-4 max-w-xs">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Search
                        </label>
                        <input onChange={(e)=>handleInput(e)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search List" />
                  </div>
            </form>
            <div className='grid grid-cols-[200px_minmax(900px,_1fr)_100px]'>
                  {list.slice(page * LIMIT - LIMIT, page * LIMIT).map((ele,ind)=>(
                        <div className="col" key={ind}>
                              <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">{ele.id}:{ele.title}</div>
                              <p className="text-gray-700 text-base">
                                    {ele.body}
                              </p>
                              </div>
                        </div>
                  ))}
            </div>

            {/* Pagination Start */}        
                  <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                              <a href="#" onClick={() => selectPageHandler(page - 1)}  className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${page > 1 ? '':'invisible'}`}>
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"  />
                                    </svg>
                              </a>
                                    {list.length > 1 ? [...Array(Math.round(list.length/10))].map((_, i) => {
                                    return <a href="#" key={i}  onClick={() => selectPageHandler(i + 1)}  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold  ${page === i + 1 ? "bg-indigo-600" : ""}`}>{i + 1}</a>
                                    }) :''}
                              <a href="#" onClick={() => selectPageHandler(page + 1)} className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${page < list.length / LIMIT ?'':'invisible'}`}>
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"  />
                                    </svg>
                              </a>
                        </nav>
                  </div>          
            {/* Pagination End */}
      </div>
    </>
  )
}
