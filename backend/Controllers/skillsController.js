import cloudinary from "cloudinary";
import Skill from "../models/skills.js";

export const createSkills = async (req, res) => {
  const { name } = req.body;
  const image = req.file.path;

  if (!image) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: "Missing required parameter - file",
    });
  }

  console.log(req.body);
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

    const skills = await Skill.create({
      name,
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
      image_mimetype: req.file.mimetype,
    });

    res.status(201).json({
      success: true,
      status: 201,
      message: "Skills created successfully",
      skills,
    });
    console.log(skills);
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

// Show all skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      status: 200,
      message: "Skills retrieved successfully",
      skills,
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