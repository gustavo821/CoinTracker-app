// Librairies
import React from 'react';
import './header.scss';
import logo from '../../Asset/logo.png';
import {FaChevronDown} from 'react-icons/fa';
import {GoSearch} from 'react-icons/go';

const Header = () => {
    return (
        <header>
            <nav>
                <a href="#" id='nav-brand'><img src={logo} alt="logo" width="50px"/> CoinMarketCap</a>

                <div className='nav-item'>
                    <div className='currency'>
                        
                        <div>
                            USD 
                            <span> <FaChevronDown/> </span>
                        </div>

                        <ul>
                            <li>USD</li>
                            <li>EUR</li>
                        </ul>
                    </div>

                    <div id="search-bar">
                        <GoSearch id="search-icon"/>
                        <input type="text" id="search-input" placeholder='Type for exemple "Bitcoin" '/>
                        
                    </div>
                </div>
            </nav>

            <div className='stats'>
                <div>Cryptocurrencies: <span>1601</span> </div>
                <div>Market: <span>11344</span></div>
                <div>Market Cap: <span>$1 288 666 875 380</span></div>
                <div>24h Vol: <span>$288 666 875 380</span></div>
                <div>Btc Dominance: <span>40.2%</span></div>
            </div>
        </header>
    );
};

export default Header;