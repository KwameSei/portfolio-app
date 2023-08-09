import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Visibility, GitHub } from '@mui/icons-material'
// import { Tooltip } from 'react-tooltip';
import { Tooltip } from '@mui/material'
import { motion } from 'framer-motion'
import { Wrapper } from '../../wrapper'
import { images } from '../../constants'

import '../wrapper.scss'
import './Skills.scss'

// const skillData = [
//   { name: 'React', imageURL: images.react, id: 1,}]

const Skills = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const getSkills = async () => {
    try {
      const res = await axios.get(`${serverURL}/api/skills/get-skills`);
      const { data } = res;
      setSkills(data.skills);
      console.log('API response:', data);
    } catch (error) {
      console.log(error);
    }
  }

  const getExperience = async () => {
    try {
      const response = await axios.get(`${serverURL}/api/experience/get-experience`);
      const { data } = response;
      setExperiences(data.experiences);
    } catch (error) {
      console.log(error);
      error.message;
    }
  }

  useEffect(() => {
    getSkills();
    getExperience();
  }, [])

  return (
    <div className='wrapper skills'>
      <h2 className='head-text'>Skills</h2>

      <div className='skills-container'>
        <div className='skills-list'>
          {console.log('This is:', skills)}
          {skills.map((skill) => (
              <motion.div
                className='skill-item'
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={skill._id} // Assuming 'id' property of skill is '_id'
              >
                <div className="image-container">
                  <img src={skill.image.url} alt={skill.name} /> {/* Assuming 'image' property contains 'url' */}
                </div>
                <div className="skill-name">{skill.name}</div>
              </motion.div>
            ))}
        </div>
        <br />
        <h2 className="head-text">Experience</h2>
        <motion.div className="experience">
          {experiences.map((experience) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="experience-item"
              data-tip
              key={experience._id}
              data-for={experience.title}
            >
              <Tooltip
                title={`${experience.description}`}
                placement="top-start"
                arrow
                type="light"
                effect="float"
                className='experience-tooltip'
                sx={{ fontSize: 14, maxWidth: 300, backgroundColor: '#fff', color: '#000', borderRadius: 10 }}
              >
              <h4 className="work-name">{experience.title}</h4>
              <p className="work-text">{experience.company}</p>
              
              {/* <p className="work-text">
                <span data-tip data-for={`tooltip-${experience._id}`}>
                  {experience.description}
                </span>
              </p> */}
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills;