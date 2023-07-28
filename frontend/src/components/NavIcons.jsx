import React from 'react'
import './components.scss'

const NavIcons = ({ active }) => {
  return (
    <div className="nav-dots">
      {['home', 'header', 'about', 'skills', 'testimonials', 'works'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={`navigation_dots ${active === item ? 'active' : ''}`}
          // style={
          //   active === item
          //     ? { backgroundColor: '#fff' }
          //     : { backgroundColor: '#ff000' }
          // }
        />
      ))}
    </div>
  );
};

export default NavIcons;
