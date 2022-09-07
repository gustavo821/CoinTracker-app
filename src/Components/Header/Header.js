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

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [displayCurrency, setDisplayCurrency] = useState("");

    const { response, loading } = useAxios('global');
    // console.log(response);
    

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
                            USD 
                            <span> <FaChevronDown/> </span>
                        </div>

                        <ul className={displayCurrency}>
                            <li>USD</li>
                            <li>EUR</li>
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
                <div>Market Cap: <span>${response && separator(response.data.total_market_cap.usd)}</span></div>
                <div>24h Vol: <span>${response && separator(response.data.total_volume.usd)}</span></div>
                <div>Btc Dominance: <span>{response && response.data.market_cap_percentage.btc.toFixed(2)}%</span></div>
            </div>
        </header>
    );
};

export default Header;