import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Blogs from './components/Blogs'
import Community from './components/Community'
import Projects from './components/Projects'
import Programs from './components/Programs'
import ProjectDisplay from './components/ProjectDisplay';
import BlogDisplay from './components/BlogDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/programs" element={<Programs />} />
        <Route exact path="/pd" element={<ProjectDisplay />} />
        <Route exact path="/display" element={<BlogDisplay />} />
        </Routes> 
    </BrowserRouter>
  )
}

export default App
