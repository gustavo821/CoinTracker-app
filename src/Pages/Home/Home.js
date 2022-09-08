import React, { useState } from 'react';
import './home.scss';
import {AiFillStar} from 'react-icons/ai';

// Componenets
import Market from '../../Components/Market/Market';


const Home = () => {



    return (
        <div className='home-section'>
            <h1>Top 100 Cryptocurrencies by Market capitalization</h1>
            
            <Market/>
            
        </div>
    );
};

export default Home;