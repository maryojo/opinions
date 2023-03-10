import React from 'react'
import KeywordSection from './KeywordSection'
import PieChart from './PieChart'

const DataAnalysis = () => {
  return (
    <div className='flex flex-col gap-5'>
    <PieChart/>
    <KeywordSection/>
    </div>
  )
}

export default DataAnalysis