import express from "express";

import { createExperience, getExperience } from "../Controllers/ExperienceController.js";

const router = express.Router();

router.post("/create-experience", createExperience);
router.get("/get-experience", getExperience);

export default router;