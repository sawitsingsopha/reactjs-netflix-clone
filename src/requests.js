const API_KEY = "282f27a97026c773a66d1f10a5b624d5";
const requests = {
  fatchTrending:
    `/trending/all/week?api_key=${API_KEY}`,
  fatchNetflixOriginals:
    `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fatchTopReted:
    `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fatchActionMovies:
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fatchComedyMovies:
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fatchHorrorMovies:
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fatchRomanceMovies:
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fatchDocumentaries:
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default requests;