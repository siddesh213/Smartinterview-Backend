import express from 'express';
import { generatePlan, getPlan } from '../controllers/planController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/generate', protect, generatePlan);
router.get('/get', protect, getPlan);

export default router;
