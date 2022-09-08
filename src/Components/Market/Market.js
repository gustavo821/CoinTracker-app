import React, { useEffect, useState } from 'react';
import './market.scss';
import {AiFillCaretDown} from 'react-icons/ai';
import {AiFillCaretUp} from 'react-icons/ai';


import { currencyFormat, reduceString, separator } from '../../Utils/utils';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../App/AppContext';
import axios from 'axios';

const Market = () => {
    const {currency,symbol} = useAppContext();
    const [response,setResponse] = useState(null);


    const fetchData = async () => {
        try {
          const result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`);

        setResponse(result.data);

        } catch(err) {
          console.log(err);
        } 
      }

      useEffect(() => {
        fetchData();
      },[currency])
    

    return (
        <div className='market-section'>
            <table>
                <thead>
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
                            <td>{response.indexOf(coin) + 1}</td>
                            <td>
                                <Link to={`detail/${coin.id}`}>
                                    <div>
                                        <img src={coin.image} alt="" width="25px"/>
                                        <a>{coin.name}</a> <span style={{textTransform: "uppercase"}}>{coin.symbol}</span>
                                    </div>
                                </Link>
                            </td>
                            <td id='colorBlue'>{symbol}{currencyFormat(coin.current_price)}</td>
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


                            <td id='colorBlue'>{symbol}{separator(coin.market_cap)}</td>
                            <td id='colorBlue'>{symbol}{separator(coin.total_volume)}</td>
                            <td>{separator(coin.circulating_supply)} <span style={{textTransform: "uppercase"}}>{coin.symbol}</span></td>
                           
                        </tr>

                    )})}

                </tbody>
            </table>
        </div>
    );
};

export default Market;