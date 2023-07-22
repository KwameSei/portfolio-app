import React from 'react'
import { motion } from 'framer-motion'
// import { images } from '../../assets/images'

import './Header.scss'

const Header = () => {
  return (
    <div className='header header__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='header__info'
      >
        <h1 className='header__title'>Hi, I'm <span className='header__title--name'>Sergio</span></h1>
      </motion.div>
    </div>
  )
}

export default Header