// import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
     <div className='headerArea'>
        <div className='IconTxtArea'>
            <img className='headerImgs' style={{position: "relative",  height: "75px", bottom: "10px"}} alt='Basketbal' src='/images/Basketball.png'></img>
            <img className='headerImgs' alt='Bike' src='/images/Biking.png'></img>
            <img className='headerImgs' alt='Running' src='/images/Running.png'></img>
            <img className='headerImgs' alt='Stretching' src='/images/Stretching.png'></img>
            <img className='headerImgs' style={{position: "relative",  height: "70px", bottom: "5px"}}alt='Yoga' src='/images/Yoga.png'></img>
            <h1 className='headerText'>GET MOVING</h1>
        </div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Find Area</Nav.Link>
            <Nav.Link href="#pricing">Workouts</Nav.Link>
            <Nav.Link href="#pricing">Diet Tips</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </div>
    );
  }
