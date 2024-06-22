import LineChart from '../../components/LineChart/LineChart'

const Chart = (props) => {
  return (
    <div className="global chart">
      {props.children}
      <LineChart/>
    </div>
  )
}

const NumChart = (props) => {
  return (
    <div className="global NumChart">
      {props.children}
    </div>
  )
}

export default Chart
export {NumChart}