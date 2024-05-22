import { useEffect, useRef } from 'react';
import './LineChart.css';
import Chart from 'chart.js/auto'

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(()=>{
    if(chartInstance.current){
      chartInstance.current.destroy()
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef,{
      type:'line',
      data:{
        labels: ['January','February','March','April','May'],
        datasets:[
          {
            label:'Line Chart',
            data:[100,20,0,40,70],
            fill:false,
            borderColor: '#0C68CF',
            borderWidth:3
          }
        ]
      }
    })
    return()=>{
      if(chartInstance.current){
        chartInstance.current.destroy()
      }
    }
  }, [])
  return (
    <>
      <canvas ref={chartRef} style={{width:"350px",height:"180px"}}></canvas>
    </>
  )
}

export default LineChart