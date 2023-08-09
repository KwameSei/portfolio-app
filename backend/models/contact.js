import mongoose from 'mongoose';

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [emailReg, 'Please enter a valid email address'],
  },
  message : {
    type: String,
    required: true,
  },
  sentConfirmation: {
    type: Boolean,
    default: false,
  },
  receivedConfirmation: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;