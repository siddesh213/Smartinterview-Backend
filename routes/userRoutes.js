import express from 'express';
import { setUserType, setInterviewDate, getProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/set-type', protect, setUserType);
router.post('/set-interview-date', protect, setInterviewDate);
router.get('/profile', protect, getProfile);

export default router;
