import React from 'react'
import {
      PresentationChartBarIcon,
      ShoppingBagIcon,
      UserCircleIcon,
      Cog6ToothIcon,
      InboxIcon,
      PowerIcon,
    } from "@heroicons/react/24/solid";
export default function Statistic() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 m-2'>
      <div className="rounded overflow-hidden shadow-lg ">
            <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                  <PresentationChartBarIcon className="h-10 w-10" />
                  </div>
                  <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
            </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg ">
            <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                  <ShoppingBagIcon className="h-10 w-10" />
                  </div>
                  <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
            </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg ">
            <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                  <InboxIcon className="h-10 w-10" />
                  </div>
                  <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
            </div>
      </div>
    </div>
     
    </>
  )
}
