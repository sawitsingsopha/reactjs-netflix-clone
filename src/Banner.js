import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';

import "./Banner.css"
function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      // effect
      async function fatchData() {
        const request = await axios.get(requests.fatchNetflixOriginals);
        setMovie(
          // สุ่มจาก 20
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        return request;
      }
      fatchData();
    }, []);
    
    // console.log("Banner",movie);

    function cutString(str,n){
      return str?.length > n ? str.substr(0,n - 1)+ "..." : str;
    }

    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        {/* Background Image */}
        <div className="banner__contents">
          {/* Title */}
          <h1 className="banner__title">
            {movie?.titie || movie?.name || movie?.original_name}
          </h1>
          {/* div 2 Button */}
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          {/* Description */}
          <h1 className="banner__description">{cutString(movie?.overview,180)}</h1>
        </div>
        <div className="banner--fadebutton"></div>
      </header>
    );
}

export default Banner
