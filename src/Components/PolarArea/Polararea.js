import React from 'react'
import { PolarArea } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';
import { Chart as ChartJS} from 'chart.js';
import css from '../Statistic/Statistics.module.css'

const Polararea = () => {
    const options = {
        // responsive: true,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 20,
            angleLines: {
              display: true,
              color: "#000"
            },
            ticks: {
              // display: false,
              stepSize: 5,
              font: {
                size: 20
              },
              backdropPadding: 0,
              // backdropColor:'red'
            },
            grid: {
              circular: true,
              color: "#000",
              lineWidth: 1,
            },
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 20
              },
              padding: 0,
            },
          },
        },
      }
    const data = {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      };
  return (
    <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>
            <div className={css}style={{width:600, height:550}}>
                <PolarArea data={data} options={options}/>
            </div>
    </div>
  )
}

export default Polararea