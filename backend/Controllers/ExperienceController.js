import Experience from "../models/experience.js";

// Create experience
export const createExperience = async (req, res) => {
  const {title, company, description} = req.body

  console.log(req.body)
  try {
    const experience = await Experience.create({
      title,
      company,
      description
    });

    res.status(201).json({
      success: true,
      status: 201,
      message: "Experience successfully created",
      experience
    });
  } catch (error) {
    res.status.json({
      success: false,
      status: 500,
      message: "Internal server error",
      error: error.message
    })
  }
}

// Show experience
export const getExperience = async (req, res) => {
  try {
    const experiences = await Experience.find();

    res.status(200).json({
      success: true,
      status: 200,
      message: "Successfully retrieved experience",
      experiences
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal server error",
      error: error.message
    })
  }
}