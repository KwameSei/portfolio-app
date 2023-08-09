import express from 'express';
import { createContact } from '../Controllers/contactController.js';

const router = express.Router();

router.post('/create-contact', createContact);

export default router;