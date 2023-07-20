import React from 'react'
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
    <div className='app'>
      <div className='overlay'></div>
      <video src={bVideo} autoPlay loop muted />
      <div className='content'>
        <Navbar />
        <Header />
        <Home />
        <About />
        <Skills />
        <Testimonials />
        <Works />
        <Footer />
      </div>
    </div>
  )
}

export default App