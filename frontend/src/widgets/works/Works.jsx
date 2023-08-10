import React, {useState, useEffect} from 'react'
import { Visibility, GitHub } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { Wrapper } from '../../wrapper'
import { images } from '../../constants'

import './Works.scss'
import '../wrapper.scss'

const workData = [
  { name: 'E-Commerce', description: 'An e-commerce web application built with React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. It is a full stack web application that allows users to browse through products, add products to cart, and checkout.', imgURL: images.ecommerce, github: '', demo: '', category: ['React', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'HTML', 'CSS', 'Git'], id: 1, },
  { name: 'Calculator', description: 'A calculator web application built with React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. It is a full stack web application that allows users to perform basic arithmetic operations.', imgURL: images.calculator, github: '', demo: '', category: ['React', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'HTML', 'CSS', 'Git'], id: 2, },
  { name: 'Weather App', description: 'A weather web application built with React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. It is a full stack web application that allows users to get the weather of a city.', imgURL: images.weather, github: '', demo: '', category: ['React', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'HTML', 'CSS', 'Git'], id: 3, },
  { name: 'Todo App', description: 'A todo web application built with React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. It is a full stack web application that allows users to add, edit, and delete todos.', imgURL: images.todo, github: '', demo: '', category: ['React', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'HTML', 'CSS', 'Git'], id: 4, },
  { name: 'Portfolio', description: 'A portfolio web application built with React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. It is a full stack web application that allows users to browse through projects, and view project details.', imgURL: images.portfolio, github: '', demo: '', category: ['React', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'HTML', 'CSS', 'Git'], id: 5, },
]

const Works = () => {
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState('All')
  const [animateCards, setAnimateCards] = useState([])

  useEffect(() => {
    if (category === 'All') {
      setAnimateCards(workData.map((_, index) => ({ y: 0, opacity: 1, transition: { delay: index * 0.1 } })));
    } else {
      setAnimateCards(workData.map((_, index) => ({ y: 100, opacity: 0, transition: { delay: index * 0.1 } })));
    }
  }, [category]);

  const handleCategory = (item) => {
    setCategory(item);
    setActive(item);
    setAnimateCards([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCards([{ y: 0, opacity: 1}]);
      if (item === 'All') {
        setActive(workData);
      } else {
        setActive(workData.filter((work) => work.category.includes(item)));
      }
    }, 500);
  }
  return (
    <div className="works wrapper">
      <h2 className='head-text'>
        For out <span>projects</span> I have worked on.
      </h2>

      <div className="project-categories">
        {[{name: 'All'}, {name: 'React'}, {name: 'Node'}, {name: 'Python'}, {name: 'JavaScript'}, {name: 'HTML'}, {name: 'CSS'}, {name: 'MongoDB'}, {name: 'Express'}, {name: 'Redux'}, {name: 'Git'}, {name: 'Material UI'}, {name: 'Sass'}, {name: 'Framer Motion'}].map((item, index) => (
          <div 
            className={`project-item ${active === item.name ? 'active' : ''}`}
            key={item.name + index}
            onClick={() => handleCategory(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="project-cards">
        {workData.map((item, index) => (
          <motion.div
            key={item.name + index}
            initial={animateCards[index]}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100, delayChildren: 0.5 }}
            className='project-card'
          >
            <div className="app__project-item app__flex" key={item}>
              <div className="app__project-item--image">
                <img src={item.imgURL} alt={item.name} />

                <motion.div
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5, type: 'spring', stiffness: 100 }}
                  className="app__project-item--overlay" app__flex
                >
                  <a href={item.github} target='_blank' rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                      whileHover={{ scale: [1.1, 0.7] }}
                      transition={{ duration: 0.25 }}
                      className="app__project-item--overlay--icon"
                    >
                      <Visibility />
                    </motion.div>
                  </a>

                  <a href={item.github} target='_blank' rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                      whileHover={{ scale: [1.1, 0.7] }}
                      transition={{ duration: 0.25 }}
                      className="app__project-item--overlay--icon"
                    >
                      <GitHub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__project-content">
                <h4 className='title'>{item.name}</h4>
                <p className='description'>{item.description}</p>

                <div className="app__project-category">
                  {/* {item.category.map((item, index) => (
                    <div className='category' key={item + index}>{item}</div>
                  ))} */}
                  {item.category[0]}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Wrapper(Works, 'works');