import React, { useEffect, useState } from 'react';
import './coinDetail.scss';
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';
import {AiFillCaretUp} from 'react-icons/ai';
import bitcoin from '../../images/Bitcoin.png';
import useAxios from '../../hooks/useAxios';
import { reduceString, separator } from '../../Utils/utils';


const CoinDetail = ({response}) => {
   

    return (
        !response ? (
            <div>Chargement</div>
        )
        :
        (
        <div className='coinDetail-section'>
            <div className='detail-item-1'>
                <div className='item_1'>
                    <img src={response.image.large} alt="coinLogo" width="50px"/>
                    <div>{response.name}</div>
                    <span style={{textTransform: "uppercase"}}>{response.symbol}</span>
                </div>

                <div className='item_2'>Rank #{response.market_cap_rank}</div>

                <div className='item_3'>
                    <div id='price'>${response.market_data.current_price.usd}</div>
                    <div className={response.market_data.market_cap_change_percentage_24h_in_currency.usd < 0 ? 'change down' : 'change'}> 
                    <span> {response.market_data.market_cap_change_percentage_24h_in_currency.usd < 0 ? <AiFillCaretDown/> : <AiFillCaretUp/> } </span> 
                    {reduceString(response.market_data.market_cap_change_percentage_24h_in_currency.usd)}%
                    </div>
                    <span>24h</span>
                </div>

                <div className='item_4'>
                    <div><span>Low:</span>${response.market_data.high_24h.usd}</div>
                    <div><span>High:</span>${response.market_data.low_24h.usd}</div>
                </div>
            </div>

            <div className='detail-item-2'>
                <div>
                    <div>Trading Volume 24h</div>
                    <div>${separator(response.market_data.total_volume.usd)}</div>
                </div>
                <div>
                    <div>Market Cap</div>
                    <div>${separator(response.market_data.market_cap.usd)}</div>
                </div>
                <div>
                    <div>Circulating Supply</div>
                    <div>{separator(response.market_data.total_supply)} <span style={{textTransform: "uppercase"}}>{response.symbol}</span>	</div>
                </div>
            </div>
        </div>
        )
        
    );
};

export default CoinDetail;