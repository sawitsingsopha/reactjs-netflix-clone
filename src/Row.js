import React,{useState,useEffect} from 'react';
import axios from './axios';
function Row({title,fatchUrl}) {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        // effect
        async function fatchData(){
            const request = await axios.get(fatchUrl);
           console.log(request.data.results); 
           return request.data.results;
        }
        fatchData();
    }, [fatchUrl]);

    return (
        <div>
            {/* title */}
            <h2>{title}</h2>
            {/* Container Posters */}

        </div>
    )
}

export default Row
