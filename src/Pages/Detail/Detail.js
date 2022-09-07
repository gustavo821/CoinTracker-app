import React from 'react';
import './Detail.scss';

// Components
import CoinDetail from '../../Components/CoinDetail/CoinDetail';
import HistoryChart from '../../Components/HistoryChart/HistoryChart';
import Converter from '../../Components/Converter/Converter';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

function Detail(props) {
    const {id} = useParams();
    const { response, loading } = useAxios(`coins/${id}`);
    console.log(response);

    return (
        <div className='detail-section'>
            <CoinDetail id={id} response={response}/>
            <HistoryChart id={id} response={response}/>
            <Converter id={id}/>
        </div>
    );
}

export default Detail;