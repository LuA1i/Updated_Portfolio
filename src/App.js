import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Updated_Portfolio" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
