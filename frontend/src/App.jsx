import React from 'react'
import bVideo from "./assets/background-video.mp4"
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='overlay'></div>
      <video src={bVideo} autoPlay loop muted />
      <div className='content'>
        <h1>Welcome to Nathaniel Osei's Site</h1>
      </div>
    </div>
  )
}

export default App