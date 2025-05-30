// import logo from './logo.svg';
import './App.css';
import React from 'react';
import{Route, Routes} from 'react-router';
import Header from "./Components/header/Header"
import Home from './Pages/home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/diet' element={<Home/>}></Route>
        <Route path='/exercises' element={<Home/>}></Route>
        <Route path='/find-park' element={<Home/>}></Route>
      </Routes>
  </div>
    
  );
}

export default App;
