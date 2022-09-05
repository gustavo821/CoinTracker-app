import React from 'react';
import './market.scss';
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';
import {AiFillCaretUp} from 'react-icons/ai';
import bitcoin from '../../images/Bitcoin.png';

const Market = () => {
    return (
        <div className='market-section'>
            <table>
                <thead>
                    <th></th>
                    <th>#</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CHANGE (24h)</th>
                    <th>MARKET CAP</th>
                    <th>Volume (24h)</th>
                    <th>CIRCULATING SUPPLY</th>
                    <th>PRICE GRAPH (7D)</th>
                </thead>

                <tbody>
                    <tr>
                        <td> <AiOutlineStar/> </td>
                        <td>1</td>
                        <td>
                            <div>
                                <img src={bitcoin} alt="" width="25px"/>
                                Bitcoin <span>BTC</span>
                            </div>
                        </td>
                        <td id='colorBlue'>$ 20 150,11</td>
                        <td>
                        <div className='down'>
                                <span > <AiFillCaretDown/> </span>
                                4,87%
                            </div>
                        </td>
                        <td id='colorBlue'>$800 856 089 582</td>
                        <td id='colorBlue'>$114 089 582</td>
                        <td>17 182 725 BTC</td>
                        <td>Graph</td>
                    </tr>

                    <tr>
                        <td> <AiFillStar/> </td>
                        <td>2</td>
                        <td>
                            <div>
                                <img src={bitcoin} alt="" width="25px"/>
                                Ethereum <span>ETH</span>
                            </div>
                        </td>
                        <td id='colorBlue'>$ 20 150,11</td>
                        <td>
                            <div>
                                <span> <AiFillCaretUp/> </span>
                                4,87%
                            </div>
                        </td>
                        <td id='colorBlue'>$800 856 089 582</td>
                        <td id='colorBlue'>$114 089 582</td>
                        <td>17 182 725 BTC</td>
                        <td>Graph</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Market;