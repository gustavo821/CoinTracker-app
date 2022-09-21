import React, { useEffect, useState } from 'react';
import {AiFillFire} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';


const TrendingCoin = () => {
    const { response} = useAxios(`search/trending`);
    // console.log(response);
    

    const [trending,setTrending] = useState([]);

    useEffect(() => {
        if(response){
            setTrending(response.coins);
        }
    },[response]);

    // console.log(trending);

    return (
        <>
           <div id='title'>Trending <span style={{color: "orange"}}> <AiFillFire/> </span> </div>

            <div className='coin'>

                {trending && trending.map(item => {
                    return(
                        <Link to={`detail/${item.item.id}`} key={item.item.id}>
                            <div >
                                <div>
                                    <img src={item.item.large} alt="logo" width="20px"/>
                                    <div>{item.item.name}</div>
                                    <span>{item.item.symbol}</span>
                                </div>

                                <div>
                                    #{item.item.market_cap_rank}
                                </div>
                            </div>
                        </Link>
                    )
                 })
                } 

                
            </div>  
        </>
    );
};

export default TrendingCoin;