import React,{useContext} from 'react'
import { useState } from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Blogs from './components/Blogs'
import Community from './components/Community'
// import Blogform from './components/Blogform';
// import Projects from './components/Projects'
// import Programs from './components/Programs'
import BlogdataProvider from './components/BlogdataProvider'
import Projects from './components/Projects'
import Programs from './components/Programs'
import ProjectDisplay from './components/ProjectDisplay';

function App() {
  const apikey="83951c0e1b35448c95fd7924393c9e9a";
  return (
    <BrowserRouter>
    <BlogdataProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/blog" element={<Blogs />} />
        {/* <Route exact path="/never" element={<Blogform />} /> */}
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/programs" element={<Programs />} />
        <Route exact path="/pd" element={<ProjectDisplay />} />
        </Routes> 
      </BlogdataProvider>     
    </BrowserRouter>
  )
}

export default App
