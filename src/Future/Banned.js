import axios from 'axios';
import React, {useState, useEffect} from "react";
//import Earth from '../img/Earth.webp';

export default function Banned() {
    const [data, setData] = useState([]);

    const interpolApi = 'https://ws-public.interpol.int/notices/v1/red'

    const redAlert = async() => {
         //Api fetch
         await axios.get(interpolApi)
         .then(res => {
            //json data
            //console.log(res.data._embedded.notices)
            setData(res.data._embedded.notices)
        })
        // Catch Error
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        redAlert();
    },[])

    return(
        <div className='banned'>
            <h1>Banned List</h1>
            <p>International Red Alert For Wanted Persons
                <br></br>
            Information provided by Interpol Red Notices
            <br></br>
            To learn more visit 
            <a href='https://www.interpol.int/How-we-work/Notices/About-Red-Notices' target="_blank" rel="noreferrer"> Interpol.int</a>
            </p>

        {data.map((info) => (
            <div class="container">
                <div class="card text-center" className="Testmoinal">
                    <div class="card-body elegant-color" className="TestBody">
                    <img src={info._links.thumbnail.href} alt="" className="TestImg"/>
                    <h1 class="text-light">{info.forename} - {info.nationalities}</h1>
                    <p class="text-light">Country: {info.nationalities}</p>
                    <p class="text-light">ID: {info.entity_id} </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}