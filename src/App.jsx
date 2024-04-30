import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
