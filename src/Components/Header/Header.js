// Librairies
import React, { useState } from 'react';
import './header.scss';
import logo from '../../Asset/logo.png';
import {FaChevronDown} from 'react-icons/fa';
import {GoSearch} from 'react-icons/go';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [displayCurrency, setDisplayCurrency] = useState("");
    

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
                <a href="#" id='nav-brand'><img src={logo} alt="logo" width="50px"/> CoinMarketCap</a>

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