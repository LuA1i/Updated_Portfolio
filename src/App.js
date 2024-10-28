import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Projects id="projects" />
    </div>
  )
}

export default App
