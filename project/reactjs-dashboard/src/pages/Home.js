import React from 'react'
import Header from '../components/Header'
import Statistic from '../components/Statistic'
import LineGraph from '../components/LineGraph'
import BarGraph from '../components/BarGraph'


export default function Home({handleSidebar}) {
  return (
    <div>
      <Header handleSidebar={handleSidebar} />
      <Statistic />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <LineGraph />
        <BarGraph />
      </div>
      
    </div>
  )
}
