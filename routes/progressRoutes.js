import express from 'express';
import { updateProgress, getProgress, getCategoryProgress, markItemComplete } from '../controllers/progressController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.put('/update', protect, updateProgress);
router.get('/get', protect, getProgress);
router.get('/:category', protect, getCategoryProgress);
router.post('/mark-item', protect, markItemComplete);

export default router;