import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import '../wrapper.scss'

const About = () => {
  return (
    <div className='wrapper about'>
      <h2 className='head-text'>
        I stand for  <span>honesty</span>, <span>integrity</span>, <span>commitment</span> and <span>dedication</span> to service.
        {/* <span>quality</span>, <span>integrity</span>, <span>commitment</span> and <span>dedication</span> to service. */}
      </h2>
    </div>
  )
}

export default About