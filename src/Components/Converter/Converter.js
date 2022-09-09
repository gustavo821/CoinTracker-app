import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../App/AppContext';
import './converter.scss';

const Converter = ({response}) => {
    const {currency,symbol} = useAppContext();

    const [currencyPrice,setCurrencyPrice] = useState(0);

    const [cryptoInput, setCryptoInput] = useState('');
    const [currencyInput, setCurrencyInput] = useState('');

    useEffect(() => {
        if (response){
            setCurrencyPrice(response.market_data.current_price[currency]);
        }
    },[response,currency])

    const changeCryptoInput = (e) => {
        const inputValue = e.target.value;
        setCryptoInput(inputValue);
        setCurrencyInput(inputValue * currencyPrice);
    }

    const changecurrencyInput = (e) => {
        const inputValue = e.target.value;
        setCurrencyInput(inputValue);
        setCryptoInput(inputValue / currencyPrice);
    }

    return (
       !response ? (
            <div>Chargement</div>
       )
       :
       (
        <div className='converter-section'>
        <div id='title'>Convert <span>{response.symbol}</span> to <span>{currency}</span></div>

        <div id='item_1'>
            <span >{response.symbol}</span>
            <input 
            type="number" 
            placeholder={response.symbol}
            value={cryptoInput}
            onChange={changeCryptoInput}
            />
        </div>

        <div id='item_2'>
            <span>{currency}</span>
            <input 
            type="number" 
            placeholder={currency}
            value={currencyInput}
            onChange={changecurrencyInput}
            />
        </div>

        <div style={{marginTop: "15px"}}>1 <span >{response.symbol}</span> = {currencyPrice} {symbol}</div>
    </div>
       )
       
    );
};

export default Converter;