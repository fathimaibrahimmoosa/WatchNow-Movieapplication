import React, { useContext, useEffect} from 'react'
import { movieContext } from './App'
import { imageUrl } from './Url';
import Rating from '@mui/material/Rating';

const MovieDetails=()=>
{
  const {movie,movieId,sethide}=useContext(movieContext);
  useEffect(() => 
    {
      sethide(false)
    
      return () => {
        sethide(true)
      }
    }, [sethide])


  let [filtrdmovie]=movie.filter((data)=>data.id===movieId);
  console.log(filtrdmovie);
  
  
  return (   
    <div style={{backgroundColor:"lightblue", height:"100vh"}}>
     
      <h2>MovieDetails</h2>
      <h3>{filtrdmovie.title}</h3>
  
      <img src={imageUrl+filtrdmovie.poster_path} style={{width:"200px", height:"200px"}} alt=""/>
      <p>
        
        <b>overview:</b>{filtrdmovie.overview}<br/>
        <Rating name="customized-10" defaultValue={filtrdmovie.vote_average} max={10}/><br/>
        <b>popularity:</b>{filtrdmovie.popularity}<br/>
        <b>original_language:</b>{filtrdmovie.original_language}<br/>
        <b>popularity:</b>{filtrdmovie.popularity}
      </p>
     
    </div>
  )
}

export default MovieDetails