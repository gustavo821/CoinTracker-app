import React, { useEffect, useRef, useState } from 'react';
import './searchBar.scss';
import {GoSearch} from 'react-icons/go';
import {AiFillCloseCircle} from 'react-icons/ai';
import {AiFillFire} from 'react-icons/ai';
import bitcoin from '../../images/Bitcoin.png';
import TrendingCoin from '../TrendingCoin/TrendingCoin';



const SearchBar = ({displayedSearchBar}) => {
    const [trending,setTrending] = useState(true);
    const [input,setInput] = useState("");
    
    useEffect(() => {
        if (input != "") {
            setTrending(false);
        } else {
            setTrending(true);
        }
    }, [input])

    return (
        <div className='search-content'>
            <div className='search'>
                <div className="search-bar">
                    <GoSearch id="search-icon"/>
                    <input 
                    type="text" 
                    id="search-input" placeholder='Type for exemple "Bitcoin" '
                    value={input}
                    onChange={e => setInput(e.target.value)} 
                    />
                    
                </div>

                <div className='closeBtn' onClick={displayedSearchBar}> <AiFillCloseCircle/> </div>
            </div>

            { trending ? (
                <TrendingCoin/>
            )
            :
            (
                <>
                <div id='title'>Cryptoassets</div>

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
            )
            }
    
        </div>
    );
};

export default SearchBar;