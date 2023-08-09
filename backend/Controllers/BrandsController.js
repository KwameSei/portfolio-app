import Brand from '../models/brands.js';
import cloudinary from 'cloudinary';

export const createBrand = async (req, res) => {
  const image = req.file.path;

  if (!image) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: "Missing required parameter - file",
    });
  }

  try {
    // Upload image to cloudinary
    const result = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio-project/brands",
      width: 150,
      crop: "scale",
      use_filename: true, // keep original name
      resource_type: "auto",  // Automatically detect the file type
    });

    const brands = await Brand.create({
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
      image_mimetype: req.file.mimetype,
    })

    res.status(201).json({
      success: true,
      status: 201,
      message: "Brand created successfully",
      brands,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Show all brands
export const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();

    res.status(200).json({
      success: true,
      status: 200,
      message: "Successfully retrieved all brands",
      brands,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};