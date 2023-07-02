import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Commmunity from './components/Community'
import Projects from './components/Projects'
import Programs from './components/Programs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Programs />
    </div>
  )
}

export default App
