import React from 'react'
import LineChart from '../../components/LineChart/LineChart'

const Chart = (props) => {
  return (
    <div className="chart">
      {props.children}
      <LineChart/>
    </div>
  )
}

const NumChart = (props) => {
  return (
    <div className="NumChart">
      {props.children}
    </div>
  )
}

export default Chart
export {NumChart}