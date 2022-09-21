import React, { useEffect, useState } from 'react';
import './searchBar.scss';
import {GoSearch} from 'react-icons/go';
import {AiFillCloseCircle} from 'react-icons/ai';
import TrendingCoin from '../TrendingCoin/TrendingCoin';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';




const SearchBar = ({displayedSearchBar}) => {
    const [trending,setTrending] = useState(true);
    const [input,setInput] = useState("");

    const { response} = useAxios(`search?query=${input}`);
    
    

    const [searchData,setSearchData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);

    // console.log(response);
    // console.log(searchData);
    console.log(filteredData);

    useEffect(() => {
        if(response){
            setSearchData(response.coins);
        }
    },[response]);

    useEffect(() => {
        const newArray = searchData && searchData.filter(item => 
            item.name.includes(input) || 
            item.symbol.includes(input) || 
            item.id.includes(input)
            ) 
            setFilteredData(newArray);
    },[searchData,input])
    
    
    useEffect(() => {
        if (input !== "") {
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
                    autoFocus
                    type="text" 
                    id="search-input" placeholder='Type for exemple "Bitcoin" '
                    value={input}
                    onChange={e => setInput(e.target.value)} 
                    />
                    
                </div>

                <div className='closeBtn' onClick={displayedSearchBar}> <AiFillCloseCircle/> </div>
            </div>

            { trending ? (
                <TrendingCoin />
            )
            :
            (
                <>
                <div id='title'>Cryptoassets</div>

                <div className='coin'>

                {filteredData && filteredData.map(item => {
                    return(
                        <Link to={`detail/${item.id}`} key={item.id}>
                            <div >
                                <div>
                                    <img src={item.large} alt="logo" width="20px"/>
                                    <div>{item.name}</div>
                                    <span>{item.symbol}</span>
                                </div>

                                <div>
                                    #{item.market_cap_rank}
                                </div>
                            </div>
                        </Link>
                    )
                 })
                } 

                    

                </div>
                </>
            )
            }
    
        </div>
    );
};

export default SearchBar;