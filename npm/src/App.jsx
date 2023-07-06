import Home from './components/home'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Blogcard from './components/Blogcard';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ BrowserRouter, Route, Routes} from "react-router-dom";
import Community from './components/Community'
import Projects from './components/Projects'
import Programs from './components/Programs'

function App() {
  const apikey="83951c0e1b35448c95fd7924393c9e9a";
  return (
    <>
     <BrowserRouter>
     <Blogs/>
       <Routes>
         <Route exact path='/general' element={<Blogs apikey={App.apikey}/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
