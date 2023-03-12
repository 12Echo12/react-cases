import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import './index.css'



const SearchFilter  = () => {
    const [cinemasList, setCinemasList] = useState([]);
    const [fixList, setFixList] = useState([]);

    // 输入中文的标识
    const flagRef = useRef(false);

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=229665',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e":"16785284821346545261740033","bc": "110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res) => {
            setCinemasList(res.data.data.cinemas);
            setFixList(res.data.data.cinemas);
        }).catch(
            (err) => console.log(err)
        );
    },[])

    const handleInput = (event) => {
        if(flagRef.current)
            event.preventDefault();
        else {
            setCinemasList(fixList.filter((item) => item.name.toUpperCase().includes(event.target.value.toUpperCase())
                || item.address.toUpperCase().includes(event.target.value.toUpperCase())
            ));
        }
    }
    
    useEffect(() => {
        console.log("change");
    },[flagRef.current])

    const handleCS = () => {
        flagRef.current = true;
    }
    const handleCE = (e) => {
        flagRef.current = false;
        handleInput(e);
    }

    return (
        <div className="box">
            <input  onInput = {handleInput} onCompositionStart={handleCS} onCompositionEnd={handleCE} /> 
            <button>搜索</button>
            <ul>
                {
                    cinemasList.map((item) => {
                        return (
                            <li>
                                <span className='cname'>{item.name}</span> <br />
                                <span className='ads'>{item.address}</span>
                            </li>
                       )
                    })
                }
            </ul>
        </div>
    )
}
export default SearchFilter