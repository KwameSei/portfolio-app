import mongoose from 'mongoose';

const brandsSchema = mongoose.Schema({
  image: {
    url: String,
    public_id: String,
  },
  image_mimetype: {
    type: String,
  }
}, { timestamps: true });

const Brand = mongoose.model('Brand', brandsSchema);

export default Brand;