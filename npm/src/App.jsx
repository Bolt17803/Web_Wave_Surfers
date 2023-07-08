import React from 'react'
import { useState } from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/home'
import Blogs from './components/Blogs'
import Blogcard from './components/Blogcard';
import Community from './components/Community'
import Projects from './components/Projects'
import Programs from './components/Programs'

function App() {
  const apikey="83951c0e1b35448c95fd7924393c9e9a";
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/community" element={<Community />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/programs" element={<Programs />} />
      </Routes>     
    </BrowserRouter>
  )
}

export default App
