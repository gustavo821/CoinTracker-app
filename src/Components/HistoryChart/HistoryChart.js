import React, { useEffect, useState } from 'react';
import './historyChart.scss';
import moment from 'moment/moment';
import axios from 'axios';

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
import { useAppContext } from '../../App/AppContext';
import Loader from '../Loader/Loader';

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

const HistoryChart = (props) => {
    const {currency} = useAppContext();
    const id = props.id;
    const detailData = props.response;
    // console.log(detailData);

    const usd = "usd";
    const [daily,setDaily] = useState(0);
    const [response,setResponse] = useState(null);
    const [filterData,setFilterData] = useState({});

  const fetchData = async (param) => {
    try {
      const result = await axios.get(`https://api.coingecko.com/api/v3/coins/${param}`);
      setResponse(result.data);
    } catch(err) {
      console.log(err);
    } 
  }

  

    
    useEffect(() => {

        if (detailData){
            if (daily == 7 ){
                fetchData(`${id}/market_chart?vs_currency=${currency}&days=${daily}&interval=5daily`);

                setFilterData(detailData.market_data.price_change_percentage_7d_in_currency[currency]);
            } else if (daily == 30 ) {
                fetchData(`${id}/market_chart?vs_currency=${currency}&days=${daily}&interval=daily`);

                setFilterData(detailData.market_data.price_change_percentage_30d_in_currency[currency]);
            } else if (daily == 60 ) {
                fetchData(`${id}/market_chart?vs_currency=${currency}&days=${daily}&interval=daily`);

                setFilterData(detailData.market_data.price_change_percentage_60d_in_currency[currency]);
            } else {
                fetchData(`${id}/market_chart?vs_currency=${currency}&days=${daily}`);
                
                setFilterData(detailData.market_data.price_change_percentage_24h_in_currency[currency]);
            }
        }

    },[daily,currency,id])

    useEffect(() => {
        setTimeout(() => {
            setDaily(1);
        }, 2000)
    },[])
    

    const filteredColor = () => {
        if (detailData) {
            if(filterData < 0) {
                return 'rgb(179, 78, 85)'
            } else {
                return 'rgba(55, 193, 111)'
            }
        }
    }

    const filteredBackground = () => {
        if (detailData) {
            if(filterData < 0) {
                return 'rgb(179, 78, 85,0.1)'
            } else {
                return 'rgba(55, 193, 111,0.1)'
            }
        }
    }
  
    const coinChartData = response && response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  
  
    const options = {
        responsive: true,
        maintainAspectRatio: false
    }
  
    const data = response && {
      labels: coinChartData.map(value => 
        {   if (daily == 1){
                return moment(value.x).format('LT')
            }else if(daily ==7 ){
                return moment(value.x).format('lll')
            }else{
                return moment(value.x).format('ll')
            } 
        }),
      datasets: [
          {
              fill: true,
              label: id ,
              data: coinChartData.map(val => val.y),
              borderColor: filteredColor(),
              backgroundColor: filteredBackground(),
          }
      ]
    }
  
    // console.log(coinChartData);

    return (
        <div className='chart-section'>
            <div className="chart-menu">
                <div 
                className={daily == 1 && 'active'} onClick={() => setDaily(1)}
                >
                    1D
                </div>
                <div 
                className={daily == 7 && 'active'}
                onClick={() => setDaily(7)}
                >
                    7D
                </div>
                <div
                className={daily == 30 && 'active'} 
                onClick={() => setDaily(30)}
                >
                    1M
                </div>
                <div
                className={daily == 60 && 'active'} 
                onClick={() => setDaily(60)}
                >
                    2M
                </div>
            </div>


            {
                !response ? (
                    <Loader height="200px"/>
                )
                :
                (
                    <div className="chart">
                        <Line options={options} data={data} height={100} width={100}/>  
                    </div>
                )
            }

        </div>
    );
};

export default HistoryChart;