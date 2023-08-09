import Testimonial from "../models/testimonials.js";
import cloudinary from "cloudinary";

// Create testimonial
export const createTestimonial = async (req, res) => {
  const {name, company, feedback} = req.body
  const image = req.file.path;

  if (!image) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: "Missing required parameter - file",
    });
  }

  console.log(req.body)
  try {
    // Upload image to cloudinary
    const result = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio-project/skills",
      width: 150,
      crop: "scale",
      use_filename: true, // keep original name
      resource_type: "auto",  // Automatically detect the file type
    });

    console.log(result);

    const testimonial = await Testimonial.create({
      name,
      company,
      feedback,
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
      image_mimetype: req.file.mimetype,
    });

    res.status(201).json({
      success: true,
      status: 201,
      message: "Testimonial successfully created",
      testimonial
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal server error",
      error: error.message
    })
  }
};

// Show testimonial
export const getTestimonial = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();

    res.status(200).json({
      success: true,
      status: 200,
      message: "Successfully retrieved testimonial",
      testimonials
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal server error",
      error: error.message
    })
  }
};