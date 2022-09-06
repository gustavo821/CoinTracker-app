import React, { useState } from 'react';
import './home.scss';
import {AiFillStar} from 'react-icons/ai';

// Componenets
import Market from '../../Components/Market/Market';
import Watchlist from '../../Components/WatchList/Watchlist';

const Home = () => {
    const [wathList, setWatchList] = useState(false);


    return (
        <div className='home-section'>
            <h1>Cryptocurrencies by Market capitalization</h1>
            <div className='home-menu'>
                <div 
                className={!wathList && "active"} 
                onClick={() => setWatchList(false)}
                >
                    Cryptocurrencies
                </div>

                <div 
                className={wathList && "active"}
                onClick={() => setWatchList(true)}
                >
                    <span> <AiFillStar/> </span> Watchlist
                </div>
            </div>
            
            {
                wathList ? (
                    <Watchlist/>
                )
                :
                (
                    <Market/>
                )
            }
            
        </div>
    );
};

export default Home;