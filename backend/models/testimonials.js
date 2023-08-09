import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: String,
  image: {
    url: String,
    public_id: String,
  },
  image_mimetype: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;