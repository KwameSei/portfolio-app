import mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    public_id: String,
  },
  image_mimetype: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillsSchema);

export default Skill;