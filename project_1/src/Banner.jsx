import React, { useEffect, useState } from 'react';
import { Fantacy_movies, imageUrl } from './Url';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const Banner=()=>
{
     
    const [fantacymovie, setfantacymovie] = useState([]);

    useEffect(() =>
    {
      
       axios.get(Fantacy_movies).then((response)=>
       {
          const randoms = Math.floor(Math.random() * response.data.results.length);
          const selectedMovie=response.data.results[randoms];
          setfantacymovie(selectedMovie);
       });
      
    },[] );
    
    return (
         
       <Card>
         <Card.Img variant="top" src={imageUrl+fantacymovie?.poster_path} style={{width:"100%", height:"500px"}} alt="" />
          <Card.ImgOverlay style={{alignItems:"center",color:"black",marginTop:"200px"}}>
            <Card.Title><b><i>{fantacymovie?.original_title}</i></b></Card.Title><br/>
            <Card.Text><b>Popularity:{fantacymovie?.popularity}</b></Card.Text>
            <Card.Text><b>Release Date:{fantacymovie?.release_date}</b></Card.Text> 
          </Card.ImgOverlay>
       </Card>
   )
}

export default Banner