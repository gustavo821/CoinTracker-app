import React from 'react';
import './market.scss';
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';
import {AiFillCaretUp} from 'react-icons/ai';
import bitcoin from '../../images/Bitcoin.png';

import useAxios from '../../hooks/useAxios';
import { currencyFormat, reduceString, separator } from '../../Utils/utils';
import { Link } from 'react-router-dom';

const Market = () => {
    const { response, loading } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d');
    // console.log(response);

    

    return (
        <div className='market-section'>
            <table>
                <thead>
                    <th></th>
                    <th>#</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>1h %</th>
                    <th>24h %</th>
                    <th>7d %</th>
                    <th>MARKET CAP</th>
                    <th>Volume (24h)</th>
                    <th>CIRCULATING SUPPLY</th>
                </thead>

                <tbody>
                    {response && response.map(coin => {
                        return (
                        <tr>
                            <td> <AiOutlineStar/> </td>
                            <td>{response.indexOf(coin) + 1}</td>
                            <td>
                                <Link to={`detail/${coin.id}`}>
                                    <div>
                                        <img src={coin.image} alt="" width="25px"/>
                                        <a>{coin.name}</a> <span style={{textTransform: "uppercase"}}>{coin.symbol}</span>
                                    </div>
                                </Link>
                            </td>
                            <td id='colorBlue'>${currencyFormat(coin.current_price)}</td>
                            <td>
                            <div className={coin.price_change_percentage_1h_in_currency < 0 ? 'price-change down ' : 'price-change'}>
                                    <span > 
                                        {coin.price_change_percentage_1h_in_currency < 0 ? <AiFillCaretDown/> : <AiFillCaretUp/>} 
                                    </span>
                                    {reduceString(coin.price_change_percentage_1h_in_currency)}
                                </div>
                            </td>

                            <td>
                            <div className={coin.price_change_percentage_24h < 0 ? 'price-change down ' : 'price-change'}>
                                    <span > 
                                        {coin.price_change_percentage_24h < 0 ? <AiFillCaretDown/> : <AiFillCaretUp/>} 
                                    </span>
                                    {reduceString(coin.price_change_percentage_24h)}
                                </div>
                            </td>

                            <td>
                            <div className={coin.price_change_percentage_7d_in_currency < 0 ? 'price-change down ' : 'price-change'}>
                                    <span > 
                                        {coin.price_change_percentage_7d_in_currency < 0 ? <AiFillCaretDown/> : <AiFillCaretUp/>} 
                                    </span>
                                    {reduceString(coin.price_change_percentage_7d_in_currency)}
                                </div>
                            </td>


                            <td id='colorBlue'>${separator(coin.market_cap)}</td>
                            <td id='colorBlue'>${separator(coin.total_volume)}</td>
                            <td>{separator(coin.circulating_supply)} <span style={{textTransform: "uppercase"}}>{coin.symbol}</span></td>
                           
                        </tr>

                    )})}

                </tbody>
            </table>
        </div>
    );
};

export default Market;