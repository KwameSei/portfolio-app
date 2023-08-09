import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Wrapper, MotionWrap } from '../../wrapper';
import '../wrapper.scss';
import './Testimonials.scss';

const Testimonials = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const getTestimonials = async () => {
    try {
      const res = await axios.get(`${serverURL}/api/testimonials/get-testimonial`);
      const { data } = res;
      setTestimonials(data.testimonials);
      console.log('Testimonials API response:', data);
    } catch (error) {
      console.log(error);
      error.message;
    }
  };

  const getBrands = async () => {
    try {
      const res = await axios.get(`${serverURL}/api/brands/get-brands`);
      const { data } = res;
      setBrands(data.brands);
      console.log('Brands API response:', data);
    } catch (error) {
      console.log(error);
      error.message;
    }
  };

  useEffect(() => {
    getTestimonials();
    getBrands();
  }, [])

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prevState => prevState + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    } else {
      setCurrentIndex(testimonials.length - 1)
    }
  }

  return (
    <div className='wrapper testimonial'>
      <div className='carousel-container'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={testimonial.image.url} alt={testimonial.name} />
            <div className="testimonial-content">
              <p className="feedback">{testimonial.feedback}</p>
              <div className="info">
                <h3 className="name">{testimonial.name}</h3>
                <h5 className="company">{testimonial.company}</h5>
              </div>
            </div>
          </motion.div> 
        ))}
      </div>
      <div className="nav-buttons">
        <ArrowBackIos className='button' onClick={prevTestimonial} />
        <ArrowForwardIos className='button' onClick={nextTestimonial} />
      </div>

      <div className='testimonial-brands'>
        {brands.map((brand) => (
          <motion.div
            className='brand-item'
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
            key={brand._id}
          >
            <img src={brand.image.url} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Wrapper(
  MotionWrap(Testimonials, 'testimonial'),
  'testimonials',
  'testimonial'
);