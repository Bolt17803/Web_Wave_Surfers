import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ BrowserRouter, Route, Routes} from "react-router-dom";
import Community from './components/Community'
import Projects from './components/Projects'
import Programs from './components/Programs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Community />
    </div>
  )
}

export default App
