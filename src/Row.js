import React,{useState,useEffect} from 'react';
import axios from './axios';

const image_base_url = "https://image.tmdb.org/t/p/original/";
const image_base_url_w220_h330 = "https://image.tmdb.org/t/p/w220_and_h330_face/";


function Row({title,fatchUrl}) {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // effect
        async function fatchData(){
            const request = await axios.get(fatchUrl);
           console.log(request.data.results); 
           setMovies(request.data.results);
           return request.data.results;
        }
        fatchData();
    }, [fatchUrl]);

    return (
        <div>
            {/* title */}
            <h2>{title}</h2>
            <div className="row__poster">
                {movies.map((movie,i) =>(
                    <img key={i} src={`${image_base_url_w220_h330}${movie.poster_path}`} alt={movie.name}/>
                ))}                
            </div>
            {/* Container Posters */}


        </div>
    )
}

export default Row
