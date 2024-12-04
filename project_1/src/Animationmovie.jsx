import React, { useEffect, useState } from 'react';
import { Animation_movies, imageUrl } from './Url';
import axios from 'axios';
import Card from 'react-bootstrap/Card';


const Animationmovie=()=>
{
  const [anmtnmovie, setanmtnmovie] = useState([]);

  useEffect(() =>
  {
    
     axios.get(Animation_movies).then((response)=>setanmtnmovie(response.data.results));

  },[] )

   //console.log(anmtnmovie);
   function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
  }
  return (
    <div>
      <h1 style={{color:"blue",textAlign:"left",margin:"20px"}}>
        Animation Movie
      </h1>
      {anmtnmovie.map((item)=>
          {
            return(   
              <div style={{float:"left", margin:"10px"}} key={item.id}>
                <Card style={{width:"300px", height:"500px"}}>
                  <Card.Title>{item.original_title}</Card.Title><br/>
                  <Card.Img variant="top" src={imageUrl+item.poster_path} style={{width:"100%", height:"200px"}} alt="" />
                  <Card.Body>
                    <Card.Text><b>Popularity:</b>{truncate(item.overview,20)}</Card.Text>
                    <Card.Text>Popularity:{item.popularity}</Card.Text>
                    <Card.Text>Release Date:{item.release_date}</Card.Text>
                    
                  </Card.Body>
                </Card>
              </div>
            ); 
          })}
    </div>
  )
}

export default Animationmovie