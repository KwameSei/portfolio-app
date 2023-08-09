import express from 'express';
import upload from '../utils/imageUpload.js';

import { createTestimonial, getTestimonial } from '../Controllers/TestimonialsController.js';

const router = express.Router();

router.post('/create-testimonial', upload.single("image"), createTestimonial);
router.get('/get-testimonial', getTestimonial);

export default router;