import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import css from './Statistics.module.css'

const Statistics = ({ chartData }) => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>
            <div style={{height:400}}>
                <Bar data={chartData} />
            </div>
        </div>
    )
}

export default Statistics