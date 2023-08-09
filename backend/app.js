import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import skillsRoute from './Routes/skillsRoute.js';
import experienceRoute from './Routes/experienceRoute.js';
import testimonialsRoutes from './Routes/testimonialsRoutes.js';
import brandsRoute from './Routes/brandsRoute.js';
import contactRoute from './Routes/contactRoute.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '100mb' }));

// Routes
app.use('/api/skills', skillsRoute);
app.use('/api/experience', experienceRoute);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/brands', brandsRoute);
app.use('/api/contact', contactRoute);

export default app;