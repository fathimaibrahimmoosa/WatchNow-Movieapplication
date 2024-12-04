
import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Movies from './Movies';
import { Adventure_movies, Animation_movies, Comedy_movies } from './Url';
import MovieDetails from './MovieDetails';
import Banner from './Banner';
// import Adventuremovie from './Adventuremovie';
// import Animationmovie from './Animationmovie';
// import Comedymovie from './Comedymovie';
const movieContext=createContext(); 


function App() 
{
  const [movie, setmovie] = useState([])
  const [movieId,setmovieId]=useState()
  const [show, sethide] = useState(true);
  const [searchTerm, setsearchTerm] = useState('')
  return (
    <div className="App">
      <movieContext.Provider value={{movie,setmovie,movieId,setmovieId,show,sethide,searchTerm, setsearchTerm}}>
      <BrowserRouter>
      {
        show?
          <>
        <Home />
        <Banner/>
        </>
        :""}
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/Adventuremovie" element={<Movies list={Adventure_movies} title="Adventure Movies" />}/>
        <Route path="/Animationmovie" element={<Movies list={Animation_movies} title="Animation Movies" />}/>
        <Route path="/Comedymovie" element={<Movies list={Comedy_movies} title="Comedy Movies" />}/>
        <Route path="/MovieDetails" element={<MovieDetails list ={MovieDetails} title="Movie Details" />} />
        {/* <Route path="/Adventuremovie" element={<Adventuremovie />}/>
        <Route path="/Comedymovie" element={<Comedymovie />}/>
        <Route path="/Animationmovie" element={<Animationmovie />}/> */}
        
        
      </Routes>
      </BrowserRouter>
      </movieContext.Provider>
      
    </div>
  );
}

export default App;
export {movieContext}
