import React, { useState } from 'react';
import axios from 'axios';
import { ContactMailOutlined, PhoneAndroidOutlined } from '@mui/icons-material';
import { images } from '../../constants';
import { Wrapper, MotionWrap } from '../../wrapper';

import './Footer.scss'
import '../wrapper.scss'

const Footer = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    setLoading(true);
    setIsFormSubmitted(true);
    try {
      const res = await axios.post(`${serverURL}/api/contact/create-contact`, formData);
      const { data } = res;
      console.log('Contact API response:', data);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log(error);
      error.message;  
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="wrapper footer">
      <h2>Now you know me. Time to hit me up!!!</h2>

      <div className="footer-cards">
        <div className="footer-card">
          <ContactMailOutlined className="footer-card-icon" />
          <a href="mailto:nathanielosei92@gmail.com" className="p-text">nathanielosei92@gmail.com</a>
        </div>
        <div className="footer-card">
          <PhoneAndroidOutlined className="footer-card-icon" />
          <a href="tel: +233 (245) 202-460" className="p-text">+233 (245) 202-460</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className="footer-form">
        <form>
          <div className="form-group">
            <input className="p-text" type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="p-text" type="text" name="email" placeholder="Email" value={email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea className="p-text" name="message" placeholder="Message" value={message} onChange={handleChange} />
          </div>
          <div className="form-group">
            <button className="p-text" type="button" onClick={handleSubmit}>{loading ? "Sending" : "Send"}</button>
          </div>
        </form>
      </div>
      : <div className="footer-form">
          <h3 className="p-text">Thank you for reaching out to me. I will get back to you as soon as possible.</h3>
      </div>
      }
    </div>
  )
}

export default Wrapper(
  MotionWrap(Footer, 'footer'),
  'contact',
  'footer'
);