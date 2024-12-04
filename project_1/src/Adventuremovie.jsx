import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  imageUrl,Adventure_movies } from './Url';
import Card from 'react-bootstrap/Card';


const Adventuremovie=() =>
{
  const [advntrmovie, setadvntrmovie] = useState([]);

    useEffect(() =>
    {
      
       axios.get(Adventure_movies).then((response)=>setadvntrmovie(response.data.results));

    },[] )

     function truncate(str, no_words) {
      return str.split(" ").splice(0,no_words).join(" ");
  }
  return (
    <div>
      <h1 style={{color:"blue",textAlign:"left",margin:"20px"}}>
        Adventure Movie
      </h1>
      {advntrmovie.map((item)=>
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

export default Adventuremovie