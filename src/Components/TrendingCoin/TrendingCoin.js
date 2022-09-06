import React from 'react';
import {AiFillFire} from 'react-icons/ai';
import bitcoin from '../../images/Bitcoin.png';

const TrendingCoin = () => {
    return (
        <>
           <div id='title'>Trending <span style={{color: "orange"}}> <AiFillFire/> </span> </div>

            <div className='coin'>

                <div>
                    <div>
                        <img src={bitcoin} alt="logo" width="20px"/>
                        <div>Ethereum Classic</div>
                        <span>ETC</span>
                    </div>

                    <div>
                        #17
                    </div>
                </div>

                <div>
                    <div>
                        <img src={bitcoin} alt="logo" width="20px"/>
                        <div>Ethereum</div>
                        <span>ETH</span>
                    </div>

                    <div>
                        #2
                    </div>
                </div>

                <div>
                    <div>
                        <img src={bitcoin} alt="logo" width="20px"/>
                        <div>Bitcoin</div>
                        <span>BTC</span>
                    </div>

                    <div>
                        #1
                    </div>
                </div>

                <div>
                    <div>
                        <img src={bitcoin} alt="logo" width="20px"/>
                        <div>Solana</div>
                        <span>SOL</span>
                    </div>

                    <div>
                        #9
                    </div>
                </div>

                <div>
                    <div>
                        <img src={bitcoin} alt="logo" width="20px"/>
                        <div>Cardano</div>
                        <span>ADA</span>
                    </div>

                    <div>
                        #9
                    </div>
                </div>

                <div>
                    <div>
                        <img src={bitcoin} alt="logo" width="20px"/>
                        <div>GMX</div>
                        <span>GMX</span>
                    </div>

                    <div>
                        #110
                    </div>
                </div>

                <div>
                    <div>
                        <img src={bitcoin} alt="logo" width="20px"/>
                        <div>Elrond</div>
                        <span>EGLD</span>
                    </div>

                    <div>
                        #50
                    </div>
                </div>

            </div>  
        </>
    );
};

export default TrendingCoin;