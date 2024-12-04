import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { movieContext } from './App';

function Home() {
  const {setsearchTerm}=useContext(movieContext)
  
  return (
    <div>
    <Navbar  bg="primary" >
      <Container>
        <Navbar.Brand href="/home">WatchNow</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{alignItems:"end"}}>
                <input className='inputfield' type="text" placeholder='Search Movie...' style={{width:"500px"}} onChange={(e) => setsearchTerm(e.target.value)} />

                <Link style={{textDecoration:"none", color:"black"}} to="/Adventuremovie">
                    <Nav.Link href="#Adventure_movies">Adventure Movies</Nav.Link>        
                </Link>

                <Link style={{textDecoration:"none", color:"black"}} to="/Animationmovie">
                    <Nav.Link href="#Animation_movies">Animation Movies</Nav.Link>
                </Link>

                <Link style={{textDecoration:"none", color:"black"}} to="/Comedymovie">
                    <Nav.Link href="#Comedy_movies">Comedy Movies</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </div>
  )
}

export default Home