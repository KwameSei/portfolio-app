import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import bVideo from "./assets/background-video.mp4"
import { 
  Header, 
  Footer, 
  Home, 
  About, 
  Skills, 
  Testimonials, 
  Works 
} from './widgets'
import { Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='overlay'></div>
        <video
          className='video-container ' 
          src={bVideo} autoPlay loop muted 
        />
        {/* <div className='content'> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/testimonials" element={<Testimonials />}  />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Footer />} />
          </Routes>
        {/* </div> */}
      </div>
    </Router>
  )
}

export default App