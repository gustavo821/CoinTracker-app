// Librairies
import React, { useState } from 'react';
import './header.scss';
import logo from '../../Asset/logo.png';
import {FaChevronDown} from 'react-icons/fa';
import {GoSearch} from 'react-icons/go';
import SearchBar from '../SearchBar/SearchBar';
import useAxios from '../../hooks/useAxios';
import { separator } from '../../Utils/utils';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../App/AppContext';

const Header = () => {
    const {currency,setCurrency,symbol} = useAppContext();
    // console.log(symbol);
    const [searchBar, setSearchBar] = useState(false);
    const [displayCurrency, setDisplayCurrency] = useState("");

    const { response, loading } = useAxios('global');
    

    const displayedSearchBar = () => {
        setSearchBar(!searchBar);
    }

    const displayedCurrency = () => {
        if(displayCurrency == ""){
            setDisplayCurrency("active");
        } else {
            setDisplayCurrency("");
        }
    }

    const changeCurrencyToUsd = () => {
        setCurrency('usd');
        setDisplayCurrency("");
    }

    const changeCurrencyToEur = () => {
        setCurrency('eur');
        setDisplayCurrency("");
    }

    return (
        <header>
            <nav>
                <Link to="/" id='nav-brand'><img src={logo} alt="logo" width="50px"/> CoinMarketCap</Link>

                <div className='nav-item'>

                    <div id='search-mobile' onClick={displayedSearchBar}>
                        <GoSearch id="search-icon"/>
                    </div>      

                    <div className='currency'>
                        
                        <div onClick={displayedCurrency}>
                            {currency} 
                            <span> <FaChevronDown/> </span>
                        </div>

                        <ul className={displayCurrency}>
                            <li
                            className={currency === 'usd' && 'active'}
                            onClick={changeCurrencyToUsd}
                            >
                                USD
                            </li>

                            <li
                            className={currency === 'eur' && 'active'}
                            onClick={changeCurrencyToEur}
                            >
                                EUR
                            </li>
                        </ul>
                    </div>

                    <div id="search-bar" onClick={displayedSearchBar}>
                        <GoSearch id="search-icon"/>
                        <input type="text" id="search-input" placeholder='Search... '/>
                        
                    </div>

                    {
                        searchBar && <SearchBar displayedSearchBar={displayedSearchBar}/>
                    }
                </div>
            </nav>

            <div className='stats'>
                <div>Cryptocurrencies: <span>{response && response.data.active_cryptocurrencies}</span> </div>
                <div>Market: <span>{response && response.data.markets}</span></div>
                <div>Market Cap: <span>{symbol}{response && separator(response.data.total_market_cap[currency])}</span></div>
                <div>24h Vol: <span>{symbol}{response && separator(response.data.total_volume[currency])}</span></div>
                <div>Btc Dominance: <span>{response && response.data.market_cap_percentage.btc.toFixed(2)}%</span></div>
            </div>
        </header>
    );
};

export default Header;