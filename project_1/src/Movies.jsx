import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { imageUrl } from './Url';
import { movieContext } from './App';

const Movies=({list},{title})=> 
{
     const {setmovie,setmovieId,searchTerm}=useContext(movieContext)
     const [movies, setmovies] = useState([]);
     

     useEffect(() =>
     {
       axios.get(list).then((response)=>setmovies(response.data.results));

     },[list] )
     
     setmovie(movies);

     const getMovieId=(id)=>
     {
        setmovieId(id)
     }
     const handlesearch=()=>
     {

     }

     return (
      
       <div className='row'>
        
         <h2 className='page-head'>{title}</h2>

         {movies.filter((item) => {
            return searchTerm.toLowerCase() === '' 
              ? item
              : item.title.toLowerCase().includes(searchTerm);
          })
      
          .map((item) => (
     
            <Card   key={item.id} style={{ width: '16rem', textAlign: 'center', margin: '10px' ,backgroundColor:"grey", color:"white"}} >
              {/* <Link  to="/MovieDetails" style={{textDecoration:"none"}}> */}
               {/* onClick={()=>getMovieId(item.id)} */}
              {/*  */}
              <Card.Header style={{ color: "black" }}>
                 <b>{item?.original_title}</b>
              </Card.Header>
              <Card.Img variant="top" src={imageUrl + item?.poster_path} style={{height:'350px',objectFit:"cover"}}/>
              <Card.Body>
                 <Card.Title>Language: {item?.original_language}</Card.Title>
                 <Card.Text>
                   <h6>Release Date</h6> {item?.release_date}
                 </Card.Text>
                 <Button onClick={()=>getMovieId(item.id)}><Link style={{color:"white"}} to="/MovieDetails">Details</Link></Button>
              </Card.Body>
            </Card>
          ))}
       </div>
     ); 
}

export default Movies