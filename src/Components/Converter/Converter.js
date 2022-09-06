import React from 'react';
import './converter.scss';

const Converter = () => {
    return (
        <div className='converter-section'>
            <div id='title'>Convert BTC to USD</div>

            <div id='item_1'>
                <span>BTC</span>
                <input type="number" />
            </div>

            <div id='item_2'>
                <span>USD</span>
                <input type="number" />
            </div>

            <div style={{marginTop: "15px"}}>1 BTC = 19 784,15 $</div>
        </div>
    );
};

export default Converter;