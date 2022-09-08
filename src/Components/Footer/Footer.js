import React from 'react';
import './footer.scss';
import logo from '../../Asset/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div id='footer-item-1'>
             <Link to="/" id='nav-brand'>
                <img src={logo} alt="logo" width="50px"/>
                CoinMarketCap
            </Link>
            </div>

            <div id='footer-item-2'>
                <div>
                    <div id='item'>Ressources</div>
                    <div>
                        <a href="#">Coingecko Api</a>
                        <a href="#">Code Source</a>
                        <a href="#">Chart JS</a>
                    </div>
                </div>

                <div >
                    <div id='item'>Contact</div>
                    <div>
                        <a href="#">Twitter</a>
                        <a href="#">Github</a>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;