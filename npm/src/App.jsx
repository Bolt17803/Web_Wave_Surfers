import React from 'react'
import { useState } from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/home'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import Blogcard from './components/Blogcard';
import Community from './components/Community'
import Projects from './components/Projects'
import Programs from './components/Programs'

function App() {
  const apikey="83951c0e1b35448c95fd7924393c9e9a";
  return (
    <Community />
  )
}

export default App
