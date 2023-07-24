import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { 
  Header, 
  Footer, 
  About, 
  Skills, 
  Testimonials, 
  Works 
} from '../../widgets'
import './Home.scss'
import Wrapper from '../../components/WidgetWrapper'

const Home = () => {
  const isNotMobile = useMediaQuery('(min-width:1000px)');
  return (
    <div className='home'>
      {/* <div className='header'><Header /></div> */}
      <div className={`grid-container ${isNotMobile ? 'desktop' : 'mobile'}`}>
        <div className="column-right">
          <Header />
          <About />
          <Skills />
          <Testimonials />
          <Works />
          <Footer />
        </div>
        <div className="column-left">
          <About />
        </div>
        {/* <div className="column-right"></div> */}
      </div>
    </div>
  );
}

export default Home