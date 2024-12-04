import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Comedy_movies, imageUrl } from './Url';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Comedymovie() {
  const [comdymovie, setcomdymovie] = useState([]);

  useEffect(() =>
  {
    
     axios.get(Comedy_movies).then((response)=>setcomdymovie(response.data.results));

  },[] )

   //console.log(comdymovie);

  return (
    <div>
      
      <h1 style={{color:"blue",textAlign:"left",margin:"20px"}}>Comedy Movie</h1>
      {comdymovie.map((item)=>
      {
        return(
          <div style={{float:"left", margin:"10px"}} key={item.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.original_title}</Card.Title>
        <Card.Img variant="top" src={imageUrl+item.poster_path} style={{width:"100%", height:"200px"}} alt="" />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>);
   
      })}
    </div>
  )
}

export default Comedymovie