import React, { useState, useEffect } from 'react';
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import './Row.css'

const image_base_url = "https://image.tmdb.org/t/p/original/";
// const image_base_url_w220_h330 = "https://image.tmdb.org/t/p/w220_and_h330_face/";

function Row({ title, fatchUrl, isLargeRow }) {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // effect
    async function fatchData() {
      const request = await axios.get(fatchUrl);
      setMovies(request.data.results);
      return request;
    }
    fatchData();
  }, [fatchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    console.log(movie.name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          // https://www.youtube.com/watch?v=XtMThy8QKqU&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&index=4
          setTrailerUrl(urlParams.get("v"));
        }).catch((err) => {
          console.log(err);
        })
    }
  }

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, i) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={i}
            onClick={() => handleClick(movie)}
            // onMouseOver={() => handleClick(movie)}
            // onMouseOut={() => setTrailerUrl("")}
            src={`${image_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
          />
        ))}
        {/* Perview Vdo */}
      </div>
      {/* Container Posters */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row
