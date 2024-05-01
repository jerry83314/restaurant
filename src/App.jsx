import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './assets/components/Navbar'
import { Route, Routes, Outlet } from 'react-router-dom'
import About from './pages/About'
import AlbumLayout from './pages/AlbumLayout'
import AlbumIndex from './pages/AlbumIndex'
import AlbumPhoto from './pages/AlbumPhoto'
import AlbumSearch from './pages/AlbumSearch'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/album" element={<AlbumLayout/>}>
            <Route index element={<AlbumIndex/>}></Route>
            <Route path="search" element={<AlbumSearch/>}></Route>
            <Route path=":id" element={<AlbumPhoto/>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
