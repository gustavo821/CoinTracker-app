import React from 'react';
import './Detail.scss';

// Components
import CoinDetail from '../../Components/CoinDetail/CoinDetail';
import HistoryChart from '../../Components/HistoryChart/HistoryChart';
import Converter from '../../Components/Converter/Converter';

function Detail(props) {
    return (
        <div className='detail-section'>
            <CoinDetail/>
            <HistoryChart/>
            <Converter/>
        </div>
    );
}

export default Detail;