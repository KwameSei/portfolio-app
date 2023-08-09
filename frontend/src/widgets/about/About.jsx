import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { Wrapper, MotionWrap } from '../../wrapper'

import './About.scss'
import '../wrapper.scss'

const aboutMe = [
  { title: 'Software Engineering', description: 'I am a software engineer with a passion for building web applications and solving problems. I am a self-taught developer with a background in business and finance. I am a team player and a fast learner. I am always looking for opportunities to learn and grow.', imgURL: images.software_engineering },
  { title: 'Web Development', description: 'I am a full stack web developer with experience in building web applications using JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am also familiar with Python, Django, MongoDB, and Mongoose.', imgURL: images.web_development },
  { title: 'MERN Stack', description: 'I am a MERN stack developer with experience in building web applications using JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am also familiar with Python, Django, MongoDB, and Mongoose.', imgURL: images.mern}
];

const About = () => {
  return (
    <div id='about' className='wrapper about'>
      <h2 className='head-text'>
        I stand for  <span>honesty</span>, <span>integrity</span>, <span>commitment</span> and <span>dedication</span> to service.
        {/* <span>quality</span>, <span>integrity</span>, <span>commitment</span> and <span>dedication</span> to service. */}
      </h2>
      <div className='about-me'>
        {aboutMe.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
            className='about-me__item'
            key={aboutMe[index].title}
          >
            <img src={aboutMe[index].imgURL} alt={aboutMe[index].title} />
            <h2 className='title'>{aboutMe[index].title}</h2>
            <p className='description' title={aboutMe[index].description}>{aboutMe[index].description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Wrapper(
  MotionWrap(About, 'about'), 
  'about',
  );