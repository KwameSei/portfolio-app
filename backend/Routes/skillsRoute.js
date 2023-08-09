import express from 'express';
import upload from '../utils/imageUpload.js';
import { createSkills, getSkills } from '../Controllers/skillsController.js';

const router = express.Router();

router.post('/create-skills', upload.single("image"), createSkills);
router.get('/get-skills', getSkills);

export default router;