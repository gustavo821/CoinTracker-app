import React, {useState,useEffect} from 'react';
import './footer.scss';
import logo from '../../Asset/logo.png';
import logoDark from '../../Asset/logo-dark.png';
import { Link } from 'react-router-dom';
import {BiArrowToTop} from 'react-icons/bi';
import { useAppContext } from '../../App/AppContext';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {isDark} = useAppContext();

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);


    return (
        <footer>
            <div id='footer-item-1'>
              <Link to="/" id='nav-brand'><img src={isDark ? logo : logoDark} alt="logo" width={isDark ? "60px" : "45px"}/> CoinMarketCap</Link>
            </div>

            <div id='footer-item-2'>
                <div>
                    <div id='item'>Ressources</div>
                    <div>
                        <a href="https://www.coingecko.com/en/api/documentation" target='_blank'>Coingecko Api</a>
                        <a href="https://github.com/Kds-JS/CoinTracker" target='_blank'>Source Code</a>
                        <a href="https://react-chartjs-2.js.org/" target='_blank'>Chart JS</a>
                    </div>
                </div>

                <div >
                    <div id='item'>Contact</div>
                    <div>
                        <a href="https://twitter.com/kds_JS" target='_blank'>Twitter</a>
                        <a href="https://github.com/Kds-JS/">Github</a>
                    </div>
                </div>
            </div>

            <div
            onClick={scrollToTop} 
            className={isVisible ? 'scroll active' : 'scroll'}
            >
                <BiArrowToTop/>
            </div>
            
        </footer>
    );
};

export default Footer;