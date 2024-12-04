export const imageUrl = "https://image.tmdb.org/t/p/original";
export const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
//export const comedyMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
// export const latestMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
// export const popularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;


const genre_id_1 = "12";
const genre_id_2 = "16";
const genre_id_3 = "35";
const genre_id_4 = "14";
export const Adventure_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_1}&language=en-US`;
export const Animation_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_2}&language=en-US`;
export const Comedy_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_3}&language=en-US`;
export const Fantacy_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_4}&language=en-US`;