import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { Wrapper } from '../../wrapper'
import '../wrapper.scss'

import './Header.scss'

const Header = () => {
  return (
    <div className='header header__flex wrapper'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className='header__info'
      >
        <div className="header-badge">
          <div className="badge-cmp header__flex">
            <span className='hand-emoji'>
              <img src={images.handshake_emoji} alt="handshake emoji" />
            </span>
            <div style={{ marginLeft: '1rem' }}>
              <p className='header__text'>
                Hello! Welcome to my platform. I am 
              </p>
                <h1 className='header__text--highlight'> Nathaniel</h1> with a passion for <span className='header__text--highlight'>building</span> and <span className='header__text--highlight'>designing</span> <span className='header__text--highlight'>web applications</span> that <span className='header__text--highlight'>solve problems</span>.
            </div>
          </div>

          <div className="tag-cmp header__flex">
            <p className='header__text skill'>Software Developer</p>
            <p className='header__text skill'>Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 3, delayChildren: 0.5 }}
        className='header__image'
      >
        <img className='image2' src={images.nat2} alt="header" />
      </motion.div>
      <motion.div></motion.div>
    </div>
  )
}

export default Wrapper(Header, 'home');