import React, { useState } from 'react'
import { Close, Menu } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='nav__logo'>
        <img src={images.logo} alt='logo' />
        <p>Nathaniel Osei</p>
      </div>
      <ul className='nav__items'>
        {['home', 'about', 'skills', 'testimonials', 'works', 'contact'].map((item) => (
          <li className='nav__links' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* <div className={
        `hamburger-menu ${isMenuOpen ? 'open' : ''}`
      }
        onClick={toggleMenu}
      >
        <Menu className='menu-icon' />
      </div> */}

      {!isMenuOpen && ( // Render the hamburger icon only if the menu is not open
        <div className="hamburger-menu" onClick={toggleMenu}>
          {/* Use the SVG code provided */}
          <Menu className='menu-icon' />
        </div>
      )}

        {isMenuOpen && (
          <motion.div
            className='hamburger-menu-content'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Close onClick={toggleMenu} className='close-icon' />
            <ul className='menu__items'>
              {['home', 'about', 'skills', 'testimonials', 'works', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={toggleMenu}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
    </nav>
  )
}

export default Navbar