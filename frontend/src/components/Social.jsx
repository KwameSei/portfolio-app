import React from 'react';
import { Facebook, LinkedIn, Twitter, Instagram, GitHub } from '@mui/icons-material';
import './components.scss'

const SocialIcons = () => {
  return (
    <div className='social'>
      <div>
        <a className='social-icon' href='https://github.com/KwameSei' ><GitHub /></a>
      </div>
      <div>
        <a className='social-icon' href='https://web.facebook.com/Natsei/'><Facebook /></a>
      </div>
      <div>
        <a className='social-icon' href='https://www.linkedin.com/in/nathanielosei/'><LinkedIn /></a>
      </div>
      <div>
        <a className='social-icon' href='https://twitter.com/Oseinat/'><Twitter /></a>
      </div>
      <div>
        <a className='social-icon' href='https://www.instagram.com/nat_osei/'><Instagram /></a>
      </div>
    </div>
  )
}

export default SocialIcons