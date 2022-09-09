import React from 'react';
import './loader.scss';

const Loader = ({height}) => {
    return (
        <div className="loader" style={{height: height}}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
};

export default Loader;