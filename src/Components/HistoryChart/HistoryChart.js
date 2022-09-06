import React from 'react';
import './historyChart.scss';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {

    const id = 'Bitcoin Price USD';

    const coinChartData = [
        {
            y: 12854,
            x: 185456256479
        },
        {
            y: 15854,
            x: 125596256479
        },
        {
            y: 16854,
            x: 18996256479
        },
        {
            y: 18854,
            x: 18597256479
        },
        {
            y: 19854,
            x: 18596256969
        }
    ]


    const options = {
      responsive: true,
      maintainAspectRatio: false
    }
  
    const data = {
      labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
      datasets: [
          {
              fill: true,
              label: id ,
              data: coinChartData.map(val => val.y),
              borderColor: 'rgb(55, 193, 111)',
              backgroundColor: 'rgba(55, 193, 111, 0.2)',
          }
      ]
    }
  




    return (
        <div className='chart-section'>
            <div className="chart-menu">
                <div className='active'>1D</div>
                <div>7D</div>
                <div>1M</div>
                <div>6M</div>
                <div>1Y</div>
            </div>


            <div className="chart">
                <Line options={options} data={data} height={100} width={100}/>
            </div>

        </div>
    );
};

export default HistoryChart;