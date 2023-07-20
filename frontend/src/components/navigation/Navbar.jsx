import React from 'react'
import { images } from '../../constants';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav__logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='nav__items'>
        {['home', 'about', 'skills', 'testimonials', 'works'].map((item) => (
          <li className='nav__links' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar