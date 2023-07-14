import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Community from './components/Community'
import Projects from './components/Projects'
import Programs from './components/Programs'
import ProjectDisplay from './components/ProjectDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/community" element={<Community />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects/:projectId/detailed" element={<ProjectDisplay />} />
        <Route exact path="/programs" element={<Programs />} />
        </Routes> 
    </BrowserRouter>
  )
}

export default App
