import React from 'react';
import './home.scss';


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