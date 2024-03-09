import React, { Suspense, useContext, useState }from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Transition } from "@headlessui/react";
import { ThemeContext } from '../context/ThemeProvider';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {toggle,themeToggle} = useContext(ThemeContext)
  const NAV_LINK = [
      {to:'/',className:'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium',name:'Home'},
      {to:'/team',className:'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',name:'Team'},
      {to:'/project',className:'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',name:'Project'},
  ]
  
  return (
    <>
      <nav className={toggle?"bg-gray-800":"bg-blue-800"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {NAV_LINK.map((ele,ind)=>{
                     return <Link to={ele.to} key={ind} className={ele.className}>{ele.name}</Link>     
                  })}
                </div>
              </div>
            </div>
            <div className='flex'>
              <button onClick={themeToggle} className='mx-2 btn btn-blue bg-blue-500 text-white py-1 px-4 rounded-full '>Toggle</button>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                 {NAV_LINK.map((ele,ind)=>{
                     return <Link to={ele.to} key={ind} className={ele.className+' block'}>{ele.name}</Link>     
                  })}    
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <Suspense fallback={<>...</>}>
        <Outlet />
      </Suspense>
    </>
  )
}
