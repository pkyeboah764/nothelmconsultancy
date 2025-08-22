import express from 'express';
import { sendFormData } from '../controllers/email.mjs';

const router = express.Router();

router.post('/', sendFormData);

export default router;
