import React from 'react';
import './coinDetail.scss';
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';
import {AiFillCaretUp} from 'react-icons/ai';
import bitcoin from '../../images/Bitcoin.png';

const CoinDetail = () => {


    return (
        <div className='coinDetail-section'>
            <div className='detail-item-1'>
                <div className='item_1'>
                    <img src={bitcoin} alt="coinLogo" width="50px"/>
                    <div>Bitcoin</div>
                    <span>BTC</span>
                </div>

                <div className='item_2'>Rank #1</div>

                <div className='item_3'>
                    <div id='price'>$19,774.16</div>
                    <div id='change'> <span> <AiFillCaretUp/> </span> 0.13%</div>
                    <span>24h</span>
                </div>

                <div className='item_4'>
                    <div><span>Low:</span>$19,730.73</div>
                    <div><span>High:</span>$19,749.6</div>
                </div>
            </div>

            <div className='detail-item-2'>
                <div>
                    <div>Trading Volume 24h</div>
                    <div>$39,081,692,592,558,660,000</div>
                </div>
                <div>
                    <div>Market Cap</div>
                    <div>$51,803,442,173.92</div>
                </div>
                <div>
                    <div>Circulating Supply</div>
                    <div>17 182 725 BTC	</div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetail;