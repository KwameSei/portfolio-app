import React from 'react';
import { NavIcons, SocialIcons } from '../components';

const Wrapper = (Component, idName, ClassNames) => function HOC() {
  return (
    <div
      id={idName}
      className={`container ${ClassNames}`}
    >
      <SocialIcons />
      <div className='app-wrapper app__flex'>
        <Component />

        {/* <div className='copyright'>
          <p className='p-text'>© 2020 <a href='' target='_blank'>Nathaniel Osei</a></p>
          <p className='p-text'>All rights reserved</p>
        </div> */}
      </div>
      <NavIcons active={idName} />
    </div>
  )
}

export default Wrapper