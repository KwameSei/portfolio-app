import express from 'express';
import upload from '../utils/imageUpload.js';
import { createBrand, getBrands } from '../Controllers/BrandsController.js';

const router = express.Router();

router.post('/create-brand', upload.single('image'), createBrand);
router.get('/get-brands', getBrands);

export default router;
